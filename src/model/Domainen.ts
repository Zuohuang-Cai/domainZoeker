import domainenType from '@/types/domain/domainenType';
import connection from "@/utils/db";

export class Domainen {
    public id: number | undefined;
    public name: string;
    public price: number;
    public expiry: Date;

    constructor(domainenType: domainenType) {
        this.id = domainenType.id;
        this.name = domainenType.name;
        this.price = domainenType.price;
        this.expiry = domainenType.expiry;
    }

    public async add() {
        try {
            let con = await connection
            const [result] = await con.query("INSERT INTO domainen (naam, price, expiry) VALUES (?, ?, ?)", [this.name, this.price, this.expiry]);
            // @ts-ignore
            return new Domainen({id: result.insertId, name: this.name, price: this.price, expiry: this.expiry});
        } catch (error: any) {
            throw new Error(error)
        }
    }
}