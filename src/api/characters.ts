import type { Characters } from "@/interface/Characters";
import { fetchData } from "./services"

export const getCharacters = async () => {
    const { data: { results: characters } } = await fetchData<Characters>("/characters");
    return characters;
}