<script setup lang="ts">
import { useScoreStore } from '@/stores/score';
import { useSettingsStore } from '@/stores/settings'
import { computed } from 'vue';

const settingsStore = useSettingsStore();
const scoreStore = useScoreStore();

const isInGame = computed(() => settingsStore.difficulty != null);
</script>
<template>
    <div :class="`max-w-[640px] flex ${isInGame ? 'justify-between' : 'justify-center'} py-6 w-full mx-auto`">
        <div v-if="settingsStore.isGameOver">
            <button @click="() => {
                    settingsStore.setDifficulty(null);
                    settingsStore.setGameOver(false);
                    scoreStore.moves = 0;
                }"
                class="font-comic bg-[#FFDE00] p-1 font-[Comic Sans] font-semibold shadow-[-2px_2px_1px_1px_black] uppercase">
                Jugar de nuevo
            </button>
        </div>
        <h1 class="text-4xl text-slate-100 uppercase font-bold text-center" v-if="!isInGame">
            Marvel Memories
        </h1>
        <p class="flex-1 text-right text-slate-100" v-if="isInGame">Movimientos: {{ scoreStore.moves }}</p>
    </div>
</template>

<style scoped>
.font-comic {
    font-family: 'Comic Neue';
}
</style>
