<script setup lang="ts" >
const props = defineProps({
    name: { type: String, required: true },
    className: { type: String }
})
</script>

<template>
    <div
        :class="`${props.className} p-1 text-slate-900 w-full h-full shadow-[-2px_2px_1px_1px_black] bg-[#FFDE00] font-semibold border-neutral-900 border-solid border-2 uppercase`">
        <p class="line-clamp-1 clamp-font">{{ props.name }}</p>
    </div>
</template>

<style scoped>
.clamp-font {
    font-size: clamp(0.5rem, 1.7vw, 1rem);
    display: -webkit-box;
    line-clamp: 2;
    -moz-box-orient: vertical;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
</style>