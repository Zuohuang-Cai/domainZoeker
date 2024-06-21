export type DomainInfo = {
    domain: string,
    status: string,
    reason: string,
    price: {
        product: { currency: string, price: number },
        reseller: { currency: string, price: number }
    }
}
export default DomainInfo;