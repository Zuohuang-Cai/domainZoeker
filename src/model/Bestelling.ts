import {Domainen} from "@/model/Domainen";
import bestellingType from "@/types/bestelling/bestellingType";
import connection from "@/utils/db";

export class Bestelling {
    public id: number | undefined;
    public created_at: Date;
    public total_price: number;
    public domainen: Domainen[]


    constructor(bestellingType: bestellingType) {
        this.id = bestellingType.id;
        this.created_at = bestellingType.created_at;
        this.total_price = bestellingType.total_price;
        this.domainen = bestellingType.domainen;
    }

    public async add() {
        try {
            const conn = await connection
            const [bestellingresult] = await conn.execute(
                "INSERT INTO bestellingen (created_at, total_price) VALUES (?, ?)",
                [this.created_at, this.total_price]
            );
            for (const domain of this.domainen) {
                const [result] = await conn.execute(
                    "INSERT INTO bestellingen_domainen (bestelling_id, domain_id) VALUES (?, ?)",
                    // @ts-ignore
                    [bestellingresult.insertId, domain.id]
                );
            }
            await conn.end();
        } catch (error) {
            console.error("error insert:", error);
            return null;
        }
    }

    public static async test() {
        console.log(await (await connection).ping());
    }
}