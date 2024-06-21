'use server';
import {parseDomain} from "@/utils/parseDomain";

export const searchDomains = async (name: string) => {
    return fetch('https://dev.api.mintycloud.nl/api/v2.1/domains/search?with_price=true', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.Authorization}`
        },
        body: JSON.stringify(parseDomain(name))
    })
        .then(response => response.json())
        .then(data => {
            console.log(parseDomain(name));
            console.log(data);
            return data
        })
        .catch(error => {
            return new Error(error)
        })
}