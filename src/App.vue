<script setup lang="ts">
import HeaderMenu from './components/HeaderMenu.vue';
import Card from './components/Card.vue';
import { onMounted, ref } from 'vue'
import { getCharacters } from './api/characters';
import type { CharacterCard, Characters } from './interface/Characters';

const characters = ref<CharacterCard[]>([]);
const variant = "portrait_fantastic"
onMounted(() => {
  console.log('app mounted');
  getCharacters()
    .then((charRes) => {
      characters.value = flipAllCards(charRes, true);

      setTimeout(() => {
        characters.value = flipAllCards(characters.value, false)
      }, 3000);
    })
    .catch(() => { });
});

const revealCard = ({ index, flipped }: { index: number, flipped: boolean }) => {
  characters.value[index] = { ...characters.value[index], flipped: !flipped }
}

const flipAllCards = (characters: Characters[], flipped: boolean) => (characters.map(character => ({
  ...character,
  flipped
})))

</script>

<template>
  <header>
    <HeaderMenu />
  </header>
  <main class="container mx-auto relative">
    <ul class="grid gap-3 grid-cols-3">
      <li class="" v-for="{ name, id, thumbnail: { path, extension }, flipped }, index in characters" :key="id">
        <Card @on-click="revealCard" :front-image="`${path}/${variant}.${extension}`" :flipped="flipped" :id="id"
          :index="index" />
      </li>
    </ul>
  </main>
</template>

<style>
#app {
  background-color: #2d2d30;
}
</style>
