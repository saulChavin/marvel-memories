<script setup lang="ts">
import Card from '@/components/Card.vue'
import { onMounted, ref } from 'vue'
import type { difficultyType } from '@/interface/Game'
import useGame from '@/composables/useGame'
const VARIANT = "portrait_fantastic" as const

const props = defineProps({
    difficulty: { type: String }
})

const { initGame, characters, selectCard } = useGame();

onMounted(() => {
    initGame(props.difficulty as difficultyType)
});

</script>

<template>
    <div class="w-full max-w-[640px] mx-auto">
        <ul class="flex flex-wrap gap-4 justify-center">
            <li class="" v-for="{ name, id, thumbnail: { path, extension }, flipped }, index in characters" :key="id">
                <Card @on-click="selectCard" :front-image="`${path}/${VARIANT}.${extension}`" :flipped="flipped" :id="id"
                    :index="index" :name="name" />
            </li>
        </ul>
    </div>
</template>

<style></style>