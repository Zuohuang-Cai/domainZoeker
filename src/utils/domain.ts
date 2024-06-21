'use server';
export const searchDomains = async (name: string, extension: string) => {

    return fetch('https://dev.api.mintycloud.nl/api/v2.1/domains/search?with_price=true', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${process.env.Authorization}`
        },
        body: JSON.stringify([
            {
                "name": `${name}`,
                "extension": `${extension}`
            }
        ])
    })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            return new Error(error)
        })
}