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
    <div @click="$emit('onClick', { index, flipped, id })"
        class="card box-si flex flex-col shadow-xl rounded-xl max-w-[100px] w-full min-h-[150px]">

        <div class="front-side rounded-xl overflow-hidden relative" v-if="flipped">
            <img :src="props.frontImage" />
            <span class="absolute bottom-1">
                <Cartela :name="name" />
            </span>

        </div>
        <div v-if="!flipped"
            class="flex flex-col flex-1 bg-gradient-to-r from-[#ed1d24] via-red-500 to-[#ce5cd8] p-1 rounded-xl">
            <div class=" flex flex-1 justify-center items-center bg-[#252526] rounded-lg">
                <img src="@/assets/marvel_white.webp" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.card {
    transition: scale ease 0.2s;
    box-sizing: border-box;
}

.card:hover {
    scale: 1.02;
    cursor: pointer;
}

.front-side {
    min-width: 94.5px;
    min-height: 141.75px;
    max-width: 168px;
    max-height: 252px;
}

.back-side {
    /* background-color: #252526; */
    min-width: 94.5px;
    min-height: 141.75px;
    max-width: 168px;
    max-height: 252px;
    /* border-radius: 16px; */
    /* outline: 4px solid #ed1d24c5; */
    /* outline-offset: -4px; */
}

.back-side img {
    width: 80%;
}

/* .card .front-side {
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: transform .4s linear;
}

.card .back-side {
    transform: rotateY(0deg);
    backface-visibility: hidden;
    transition: transform .4s linear;
} */

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