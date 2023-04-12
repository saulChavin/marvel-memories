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
  <main class="container mx-auto relative h-fit flex flex-col gap-1">
    <div v-if="!difficultyStore.difficulty" class="flex gap-1 px-2 mx-auto justify-center font-semibold w-full h-full">
      <div class="easy flex-1 h-52 w-52 bg-orange-600">
        Facil
      </div>
      <div class="medium flex-1 h-52 w-52 bg-slate-700">
        Intermedio
      </div>
      <div class="hard flex-1 h-52 w-52 bg-fuchsia-500">
        Dificil
      </div>
    </div>
    <div v-if="!difficultyStore.difficulty" class="flex gap-1 px-2 mx-auto justify-center font-semibold w-full h-full">
      <div class="flex-1 another h-52 w-52 bg-sky-700 fle">
        Intermedio
      </div>
      <div class="another2 h-52 w-52 bg-rose-500 flex-1">
        Dificil
      </div>
    </div>

    <div v-if="difficultyStore.difficulty">
      <BoardView :difficulty="difficultyStore.difficulty" />
    </div>

  </main>
</template>

<style>
.easy {
  clip-path: polygon(0% 0%, 80% 0%, 100% 90%, 0% 100%);
}

.medium {
  margin-left: -6%;
  clip-path: polygon(0 0, 100% 0%, 80% 85%, 20% 90%);
}

.hard {
  margin-left: -6%;
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 85%);
}

.another {
  /* margin-left: 5%; */
  margin-top: -4%;
  clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0 100%);
}

.another2 {
  margin-top: -5%;
  clip-path: polygon(0 4%, 22% 0%, 100% 100%, 0 100%);
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
}
</style>
