<script setup lang="ts">
import type { CharacterCard } from '@/interface/Characters';
import Cartela from './Cartela.vue';

const emit = defineEmits<{
    (e: 'onClick', card: { flipped: boolean, id: number, index: number }): void
}>()
const props = defineProps({
    index: { type: Number, required: true },
    id: { type: Number, required: true },
    frontImage: { type: String, required: true },
    flipped: { type: Boolean, required: true },
    name: { type: String, required: true },
})
</script>

<template>
    <div class="card" :class="{ flipped: flipped }" @click="$emit('onClick', { index, flipped, id })">
        <div class="card-container" :class="{ flipped: flipped }">
            <div class="front-side bg-gradient-to-r from-[#ed1d24] via-red-500 to-[#ce5cd8] p-1 rounded-xl">
                <div class=" flex flex-1 justify-center items-center bg-[#252526] rounded-lg">
                    <img src="@/assets/marvel_white.webp" />
                </div>
            </div>
            <div class="back-side rounded-xl overflow-hidden">
                <img :src="props.frontImage" />
                <span class="absolute bottom-1">
                    <Cartela :name="name" />
                </span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.card {
    width: 96px;
    height: 144px;
}

.card-container {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform ease .3s;
}

.card:hover {
    scale: 1.02;
    cursor: pointer;
}

.front-side,
.back-side {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* transform: rotateY(0deg); */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flipped .card-container {
    transform: rotateY(180deg);
}

.back-side {
    transform: rotateY(180deg);
}

/* 
.card:hover .front-side {
    transform: rotateY(0deg);
    cursor: pointer;
}
.card:hover .back-side {
    transform: rotateY(180deg);
    cursor: pointer;
} */
</style>