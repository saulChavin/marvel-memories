import type { Characters } from "@/interface/Characters";
import { fetchData } from "./services"

interface getCharactersArgs {
    offset?: number;
    limit?: number;
}

export const getCharacters = async ({ offset = 0, limit = 20 }: getCharactersArgs) => {
    const { data: { results: characters } } = await fetchData<Characters>('/characters', [`offset=${offset}`,`limit=${limit}&`]);
    return characters;
}