import domainenType from '@/types/domain/domainenType';

export class Domainen {
    id: number | undefined;
    name: string;
    type: string;
    expiry: Date;

    constructor(domainenType: domainenType) {
        this.id = domainenType.id;
        this.name = domainenType.name;
        this.type = domainenType.type;
        this.expiry = domainenType.expiry;
    }

}