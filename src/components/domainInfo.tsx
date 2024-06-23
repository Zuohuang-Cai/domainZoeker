import React, {useCallback} from 'react';
import {Button} from "@nextui-org/button";
import DomainInfoType from '@/types/domain/domainInfo';
import {toast} from "react-toastify";


export default function DomainInfo({domainInfos}: { domainInfos: DomainInfoType[] | null }) {
    const storeDomainInfo = useCallback((domainInfo: DomainInfoType) => {
                if (domainInfo) {
                    let data = localStorage.getItem('car');
                    if (data) {
                        let car = JSON.parse(data);
                        if (car.some((item: { domain: string }) => item.domain === domainInfo.domain)) {
                            return toast.error('Dit domein is al toegevoegd in de winkelwagen', {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                        car.push({"domain": domainInfo.domain, "price": domainInfo.price.reseller.price});
                        localStorage.setItem('car', JSON.stringify(car));
                    } else {
                        localStorage.setItem('car', JSON.stringify([{
                            "domain": domainInfo.domain,
                            "price": domainInfo.price.reseller.price
                        }]));
                    }
                }
            }
            ,
            [domainInfos]
        )
    ;

    if (domainInfos === null) return null;

    return (
        domainInfos.map((domainInfo, index) => (
            <div className={`bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-lg`}>
                <h1 className="text-xl font-bold mb-2">Domain Info</h1>
                <p>Domain: {domainInfo.domain}</p>
                <p>Status: {domainInfo.status}</p>
                <p>Price: {domainInfo.price.product.price} {domainInfo.price.product.currency}</p>
                <p>Reseller Price: {domainInfo.price.reseller.price} {domainInfo.price.reseller.currency}</p>
                {domainInfo.status === "free" && (
                    <Button onClick={() => storeDomainInfo(domainInfo)}>voegen in winkelwagen</Button>
                )}
            </div>
        ))
    );
}
