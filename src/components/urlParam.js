
export function UrlParam(name) {
    var url = new URL(window.location.href),
        result = url.searchParams.get(name);
    return result
}

export function CustomUrlParam(_url, name) {
    var url = new URL(_url),
        result = url.searchParams.get(name);
    return result
}