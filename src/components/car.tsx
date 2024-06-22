import React, {useEffect, useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

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
                            <ModalHeader className="flex flex-col gap-1">WINKEL MAAND</ModalHeader>
                            <ModalBody>
                                {carItems && carItems.map((item: { domain: string, price: string }, index: number) => (
                                    <div className={"flex justify-between"}>
                                        <p>{item.domain}</p>
                                        <div className={"flex"}>
                                            <p>{item.price} €</p>
                                            <Button color="danger" variant="light"
                                                    onPress={() => RemoveDomain(item.domain)}>
                                                Remove</Button>
                                        </div>
                                    </div>
                                ))}
                                <div className={"flex justify-between"}>
                                    <h1 className={"text-end"}>Nog te Betalen</h1>
                                    <p>{carItems && carItems.reduce((total, item) => {
                                        return total + (parseFloat(item.price) * 1.21);
                                    }, 0).toFixed(2)}€</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => {
                                    console.log(carItems);
                                    return 1
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
