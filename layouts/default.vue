<script setup lang="ts">
import TheMenu from '~/components/TheMenu.vue'
</script>

<template>
  <div h-screen w-screen grid="~ rows-1 cols-[250px_1fr]">
    <TheMenu b="r gray/40" p-4 />
    <div>
      <slot />
    </div>
  </div>
</template>
