<script setup lang="ts">
import { useSettingsStore } from '../stores/settings'

const settingsStore = useSettingsStore();
</script>
<template>
    <div class="flex justify-center py-6 mx-auto">
        <div v-if="settingsStore.isGameOver">
            <button @click="() => {
                settingsStore.setDifficulty(null);
                settingsStore.setGameOver(false);
            }" class="bg-[#FFDE00] p-1 font-[Comic Sans] font-semibold shadow-[-2px_2px_1px_1px_black] uppercase">
                Jugar de nuevo
            </button>
        </div>
        <h1 class="text-4xl text-slate-100 uppercase font-bold text-center" v-else>
            Marvel Memories
        </h1>
    </div>
</template>