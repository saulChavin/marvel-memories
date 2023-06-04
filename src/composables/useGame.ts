import { ref } from 'vue';
import { getCharacters } from '@/api/characters';
import type { CharacterCard, Characters } from '@/interface/Characters';
import { getNumberOfCards, getRandomInt } from '@/utils/game_settings';
import { useSettingsStore } from '@/stores/settings';
import type { difficultyType } from '@/interface/Game';
//@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function useGame() {
    const characters = ref<CharacterCard[]>([]);
    const selectedCards = ref<{ id: number, index: number }[]>([]);
    const matchedCards = ref<{ id: number, index: number }[]>([]);
    const settingsStore = useSettingsStore();

    const initGame = async (gameDifficulty: difficultyType) => {
        const limit = getNumberOfCards(gameDifficulty);
        const offset = getRandomInt(1, 1562);
        const charactersRes = await getCharacters({ offset, limit })
        characters.value = flipAllCards(shuffleCards(charactersRes), true);
        setTimeout(() => {
            characters.value = flipAllCards(characters.value, false);
        }, 3000)
    }

    const shuffleCards = (cards: any[]) => {
        return [...cards, ...cards].sort(() => Math.random() - 0.5);
    }

    const selectCard = ({ flipped, id, index }: { flipped: boolean, id: number, index: number }) => {
        if (characters.value[index].flipped) return;
        if (selectedCards.value.length < 2) {
            selectedCards.value.push({ index, id });
            flipCard(index, !flipped);
        }
        if (selectedCards.value.length === 2) {
            if (selectedCards.value[0].id !== selectedCards.value[1].id) {
                setTimeout(() => {
                    selectedCards.value.forEach(selected => {
                        flipCard(selected.index, false);
                    });
                    selectedCards.value = [];
                }, 900);
            } else {
                matchedCards.value.push(...selectedCards.value);
                selectedCards.value = [];
                if (characters.value.length === matchedCards.value.length) {
                    confetti();
                    settingsStore.setGameOver(true);
                }
            }
        }
    }

    const flipCard = (index: number, flipped: boolean) => {
        characters.value[index].flipped = flipped;
    }

    const flipAllCards = (characters: Characters[], flipped: boolean) => (characters.map(character => ({
        ...character,
        flipped
    })))

    return {
        initGame,
        selectCard,
        characters,
    }
}