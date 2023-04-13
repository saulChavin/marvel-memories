<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import Button from '@/components/Button.vue';
import BoardView from './views/BoardView.vue';
import { useSettingsStore } from './stores/settings'

const difficultyStore = useSettingsStore();
</script>
 
<template>
  <header class="w-full">
    <HeaderMenu />
  </header>
  <main class="container mx-auto relative h-fit flex flex-1 flex-col gap-1">
    <div v-if="!difficultyStore.difficulty" class="max-w-screen-md flex gap-1 px-2 mx-auto justify-center font-semibold w-full h-full">
      <div @click="difficultyStore.setDifficulty('easy')" class="easy flex-1 h-52 w-52 bg-orange-600">
        Facil
      </div>
      <div class="medium flex-1 h-52 w-52 bg-slate-700">
        Intermedio
      </div>
      <div class="hard flex-1 h-52 w-52 bg-fuchsia-500">
        Dificil
      </div>
    </div>
    <div v-if="difficultyStore.difficulty" class="flex gap-1 px-2 mx-auto justify-center font-semibold w-full h-full">
      <BoardView :difficulty="difficultyStore.difficulty" />
    </div>

  </main>
</template>

<style>
.easy {
  clip-path: polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%);
  background: url(http://i.annihil.us/u/prod/marvel/i/mg/c/c0/4c7c63dd70fe7/standard_fantastic.jpg);
  background-position: center;
  background-size: cover;
}

.medium {
  margin-left: -6%;
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 20% 100%);
  background: url(https://i.annihil.us/u/prod/marvel/i/mg/2/70/50febd8be6b5d/standard_fantastic.jpg);
  background-position: center;
  background-size: cover;
}

.hard {
  margin-left: -6%;
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
  background: url(https://i.annihil.us/u/prod/marvel/i/mg/8/03/510c08f345938/standard_fantastic.jpg);
  background-position: right;
  background-size: cover;
}

body {
  height: 100vh;
  background-color: #2d2d30;
  margin: 0;
  padding: 0;
  font-family: 'Comic Neue';
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
