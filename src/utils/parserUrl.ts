export default function parserUrl(url: string): string | Array<string> {
    let urlArray = url.split('.');
    if (urlArray.length === 1) {
        return urlArray[0];
    }
    let extension = urlArray[urlArray.length - 1];
}
