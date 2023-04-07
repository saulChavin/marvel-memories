<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import Button from '@/components/Button.vue';
import BoardView from '@/views/BoardView.vue';
import { ref } from 'vue';
import type { difficultyType } from '@/interface/Game';

const difficultyState = ref<difficultyType | null>(null);

const setDifficulty = (difficulty: difficultyType) => {
  difficultyState.value = difficulty;
}

</script>
 
<template>
  <header class="w-full">
    <HeaderMenu />
  </header>
  <main class="container mx-auto relative">
    <div v-if="!difficultyState" class="flex flex-col gap-4 max-w-xs px-2 mx-auto font-semibold">
      <button @click="setDifficulty('easy')" class="bg-cyan-700 rounded-md py-1 hover:bg-cyan-600">Fácil</button>
      <button @click="setDifficulty('medium')"
        class="bg-orange-400 rounded-md py-1 hover:bg-amber-600">Intermedio</button>
      <button @click="setDifficulty('hard')" class="bg-red-500 rounded-md py-1 hover:bg-red-600">Dificil</button>
    </div>

    <div v-if="difficultyState">
      <BoardView :difficulty="difficultyState"/>
    </div>

  </main>
</template>

<style>
body {
  background-color: #2d2d30;
  margin: 0;
  padding: 0;
  font-family: 'Comic Neue';
}
</style>
