import {Domainen} from '@/model/Domainen';

export type bestellingType = {
    id: number | undefined;
    created_at: Date;
    total_price: number;
    domainen: Domainen[];
};
export default bestellingType;