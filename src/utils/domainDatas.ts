import {searchDomains} from "@/utils/domain";

export default async function domainDatas(name: string) {
    const domain_extensions: string[] = [
        "com",
        "net",
        "org",
        "edu",
        "gov",
        "mil",
        "int",
        "io",
        "co",
        "us",
        "uk",
        "de",
        "fr",
        "cn",
        "ru",
        "jp",
        "in",
        "br",
        "au",
        "ca",
        "it",
        "es",
        "nl",
        "se",
        "no",
        "fi",
        "dk",
        "pl",
        "ch",
        "be",
        "at",
        "gr",
        "pt",
        "tr",
        "mx",
        "ar",
        "za",
        "kr",
        "hk",
        "sg",
        "my",
        "nz",
        "il",
        "ae"
    ]
    const output: { name: string, extension: string }[] = []
    for (const domainExtension of domain_extensions) {
        await searchDomains({name: name, extension: domainExtension})
    }
    return output
}