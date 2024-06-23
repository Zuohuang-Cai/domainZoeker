export function parseDomain(domain: string) {
    const data = domain.split('.');
    const extensions = ['com', 'nl', 'net', 'shop', 'de', 'org', 'uk', 'xyz', 'be'];
    if (data.length > 1) {
        return [{
            "extension": data[data.length - 1],
            "name": data.slice(0, -1).reduce((acc, curr) => acc + curr, '')
        }]
    } else {
        return extensions.map((ext) => ({
            "extension": ext,
            "name": domain
        }));
    }
}