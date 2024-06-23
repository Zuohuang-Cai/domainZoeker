'use client'
import React, {useEffect, useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import StoreOrder from "@/services/storeOrder";
import {toast} from "react-toastify";

export default function Car() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    useEffect(() => {
        const storedData: string | null = localStorage.getItem('car');
        const initialParsedData: { domain: string, price: string }[] = storedData ? JSON.parse(storedData) : [];
        setCarItems(initialParsedData);
    }, [isOpen])
    const [carItems, setCarItems] = useState<{ domain: string, price: string }[] | null>(null);
    const RemoveDomain = (domain: string) => {
        if (!carItems) return;
        const updatedCarItems = carItems.filter(item => item.domain !== domain);
        localStorage.setItem('car', JSON.stringify(updatedCarItems));
        setCarItems(updatedCarItems);
    };

    return (
        <div className={"hover:cursor-pointer"}>
            <svg
                onClick={onOpen}
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag"
                viewBox="0 0 16 16">
                <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-black dark:text-white">WINKEL
                                MAAND</ModalHeader>
                            <ModalBody>
                                {carItems && carItems.map((item: { domain: string, price: string }, index: number) => (
                                    <div className={"flex justify-between text-black dark:text-white"}>
                                        <p className={"flex items-center"}>{item.domain}</p>
                                        <p>{item.price} USD<Button color="danger" variant="light"
                                                                   onPress={() => RemoveDomain(item.domain)}>
                                            Remove</Button></p>
                                    </div>
                                ))}
                                <div className={"flex justify-between text-black dark:text-white"}>
                                    <h1 className={"text-end"}>Nog te Betalen</h1>
                                    <p>{carItems && carItems.reduce((total, item) => {
                                        return total + (parseFloat(item.price) * 1.21);
                                    }, 0).toFixed(2)}USD</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={async () => {
                                    if (!carItems) return toast.error(`de winkelmand is leeg`, {
                                        position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                    try {
                                        await StoreOrder(carItems)
                                        localStorage.removeItem('car');
                                        setCarItems(null);
                                    } catch (e: any) {
                                        toast.error(`Er is iets fout gegaan heb je die domain al gekocht?`, {
                                            position: "bottom-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                        });
                                    }
                                }}>
                                    Afrekenen
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
