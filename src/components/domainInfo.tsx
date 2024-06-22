import React, {useCallback} from 'react';
import {Button} from "@nextui-org/button";
import DomainInfoType from '@/types/domain/domainInfo';
import {toast} from "react-toastify";

interface DomainInfoProps {
    domainInfos: DomainInfoType | null;
}

export default function DomainInfo({domainInfos}: DomainInfoProps) {
    const storeDomainInfo = useCallback(() => {
                if (domainInfos) {
                    let data = localStorage.getItem('car');
                    if (data) {
                        let car = JSON.parse(data);
                        if (car.includes(domainInfos.domain)) return toast.error('Dit domein is al toegevoegd in de winkelwagen', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        car.push(domainInfos.domain);
                        localStorage.setItem('car', JSON.stringify(car));
                    } else {
                        localStorage.setItem('car', JSON.stringify([domainInfos.domain]));
                    }
                }
            }
            ,
            [domainInfos]
        )
    ;

    if (domainInfos === null) return null;

    return (
        <div className={`bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-lg`}>
            <h1 className="text-xl font-bold mb-2">Domain Info</h1>
            <p>Domain: {domainInfos.domain}</p>
            <p>Status: {domainInfos.status}</p>
            <p>Price: {domainInfos.price.product.price} {domainInfos.price.product.currency}</p>
            <p>Reseller Price: {domainInfos.price.reseller.price} {domainInfos.price.reseller.currency}</p>
            {domainInfos.status === "free" && (
                <Button onClick={storeDomainInfo}>voegen in winkelwagen</Button>
            )}
        </div>
    )
}
