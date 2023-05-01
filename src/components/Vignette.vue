<script setup lang="ts">
import Cartela from './Cartela.vue';

defineEmits(['onClick'])
const props = defineProps({
  difficulty: { type: String, required: true },
  label: { type: String, required: true },
  class: { type: String, required: true },
  image: { type: String, required: true },
})
</script>

<template>
  <div @click="$emit('onClick', difficulty)"
    :style="{background: `url(${image}) center center / cover)`}"
    :class="`${props.class} contenedor flex-1 h-52 w-52 relative flex items-center justify-center`" role="button">
    <span>
      <Cartela :name="label" class-name="effect3d" />
    </span>
    <div id="overlay">
    </div>
  </div>
</template>

<style>
.contenedor {
  perspective: 1000px;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: background-color .5s ease, transform .5s ease;
}

#overlay:hover {
  background-color: rgba(0, 0, 0, 0);
}

.effect3d {
  transition: transform .5s ease;
  transform-style: preserve-3d;
}

#overlay:hover .effect3d {
  transform: translateZ(50px), translateX(10px), translateY(10px);
}
</style>