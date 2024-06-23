'use server'
import {Bestelling} from "@/model/Bestelling";
import BestellingType from "@/types/bestelling/bestellingType";
import {Domainen} from "@/model/Domainen";
import DomainenType from "@/types/domain/domainenType";

export default async function StoreOrder(carItems: { domain: string, price: string }[]) {
    const totalprice: number = parseFloat(carItems.reduce((total, item) => {
        return total + (parseFloat(item.price) * 1.21);
    }, 0).toFixed(2))
    const domainen: Domainen[] = [];
    for (const item of carItems) {
        let oneYearLater = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        let domainP = {
            name: item.domain,
            price: parseFloat(item.price),
            expiry: oneYearLater,
        } as DomainenType;
        let Domain: Domainen = new Domainen(domainP);
        Domain = await Domain.add();
        domainen.push(Domain);
    }
    let bestellingP = {
        created_at: new Date(),
        total_price: totalprice,
        domainen: domainen
    } as BestellingType;
    let bestelling = new Bestelling(bestellingP);
    await bestelling.add();
}