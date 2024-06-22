import {Domainen} from "@/model/Domainen";
import bestellingType from "@/types/bestelling/bestellingType";

export class Bestelling {
    private id: number | undefined;
    private created_at: Date;
    private total_price: number;
    private domainen: Domainen[] = [];

    constructor(bestellingType: bestellingType) {
        this.id = bestellingType.id;
        this.created_at = bestellingType.created_at;
        this.total_price = bestellingType.total_price;
    }
}