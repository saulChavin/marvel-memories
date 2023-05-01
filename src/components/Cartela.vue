<script setup lang="ts" >
const props = defineProps({
    name: { type: String, required: true },
    className: { type: String }
})
</script>

<template>
    <div
        :class="`${props.className} p-1 w-full h-full shadow-[-2px_2px_1px_1px_black] bg-[#FFDE00] font-semibold border-neutral-900 border-solid border-2 uppercase`">
        {{ props.name }}
    </div>
</template>