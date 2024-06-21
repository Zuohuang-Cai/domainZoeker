export function parseDomain(domain: string) {
    const data = domain.split('.')
    if (data.length > 1) {
        return [{
            "extension": data[data.length - 1],
            "name": data.slice(0, -1).reduce((acc, curr) => acc + curr, '')
        }]
    } else {
        throw new Error('invalid extension')
    }
}