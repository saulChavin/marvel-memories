<script setup lang="ts">
import HeaderMenu from './components/HeaderMenu.vue';
import Card from './components/Card.vue';
import { onMounted, ref } from 'vue'
import { getCharacters } from './api/characters';
import type { CharacterCard, Characters } from './interface/Characters';
import { getNumberOfCards, getRandomInt } from './utils/game_settings';

type difficulty = 'easy' | 'medium' | 'hard';

const characters = ref<CharacterCard[]>([]);
const openCards = ref<number[]>([]);
const variant = "portrait_fantastic"
onMounted(() => {
  initGame('hard')
});

const initGame = async (gameDifficulty: difficulty) => {
  const limit = getNumberOfCards(gameDifficulty);
  const offset = getRandomInt(1, 1562);
  const charactersRes = await getCharacters({ offset, limit })
  characters.value = flipAllCards(shuffleCards(charactersRes), true);
  setTimeout(() => {
    characters.value = flipAllCards(characters.value, false);
  }, 2000)
}

const shuffleCards = (cards: any[]) => {
  return [...cards, ...cards].sort(() => Math.random() - 0.5);
}

const revealCard = ({ index, flipped, id }: { index: number, flipped: boolean, id: number }) => {

  if (characters.value[index].flipped) return;
  if (openCards.value.length < 2) {
    characters.value[index].flipped = !flipped;
    openCards.value.push(id);
  } else {
    validateGameOver(openCards.value)
      ? (() => {
        openCards.value = [];
      })()
      : setTimeout(() => {
        characters.value = flipAllCards(characters.value, false);
        openCards.value = [];
      }, 1500);
  };
}

const validateGameOver = (openCards: number[]) => openCards[0] === openCards[1];

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
    <ul class="flex flex-wrap gap-4 justify-center">
      <li class="" v-for="{ name, id, thumbnail: { path, extension }, flipped }, index in characters" :key="id">
        <Card @on-click="revealCard" :front-image="`${path}/${variant}.${extension}`" :flipped="flipped" :id="id"
          :index="index" />
      </li>
    </ul>
  </main>
</template>

<style>
body,
* {
  background-color: #2d2d30;
  margin: 0;
  padding: 0;
}
</style>
