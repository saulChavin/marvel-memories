import type { IResponse } from '../interface/Response';
const BASE_URL = "https://gateway.marvel.com/v1/public"
export const fetchData = async <T,>(targetUrl: string, query: string[]): Promise<IResponse<T>> => {

    const ts = new Date().getTime();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;

    //@ts-ignore
    const hash = md5(`${ts}${privateKey}${publicKey}`).toString();
    const res = await fetch(`${BASE_URL}${targetUrl}?${query.join('&')}ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    return await res.json();
}