import domainInfo from '@/types/domain/domainInfo';

export default function DomainInfo({domainInfos: domainInfos}: { domainInfos: domainInfo | null }) {
    if (domainInfos == null) return null;
    console.log(domainInfos)
    return (
        <div className={`bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow-lg`}>
            <h1 className="text-xl font-bold mb-2">Domain Info</h1>
            <p>Domain: {domainInfos.domain}</p>
            <p>Status: {domainInfos.status}</p>
            <p>Price: {domainInfos.price.product.price} {domainInfos.price.product.currency}</p>
            <p>Reseller Price: {domainInfos.price.reseller.price} {domainInfos.price.reseller.currency}</p>
        </div>
    )
}