<script setup lang="ts" >
const props = defineProps({name: {type: String, required: true}})
</script>

<template>
    <div
        class="card-footer absolute shadow-[-2px_2px_1px_1px_black] bottom-2 right-0 bg-[#FFDE00] font-semibold border-neutral-900 border-solid border-2 uppercase">
        <p class="text-sm text-end px-1">{{ props.name }}</p>
    </div>
</template>