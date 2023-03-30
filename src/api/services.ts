import type { IResponse } from '../interface/Response';
const BASE_URL = "http://gateway.marvel.com/v1/public"
export const fetchData = async <T, >(targetUrl: string): Promise<IResponse<T>> => {

    const ts = new Date().getTime();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;

    //@ts-ignore
    const hash = md5(`${ts}${privateKey}${publicKey}`).toString();
    console.log('hash', hash)
    const res = await fetch(`${BASE_URL}${targetUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    return await res.json();
}