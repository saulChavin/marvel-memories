import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { difficultyType } from '@/interface/Game';


export const useSettingsStore = defineStore('difficulty', () => {
    const difficulty = ref<difficultyType | null>(null);
    const isGameOver = ref(false);

    const setDifficulty = (newDifficulty: difficultyType | null) => {
        difficulty.value = newDifficulty;
    }

    const setGameOver = (gameOver: boolean) => {
        isGameOver.value = gameOver;
    }

    return {
        difficulty,
        setDifficulty,
        setGameOver,
        isGameOver,
    }
})
