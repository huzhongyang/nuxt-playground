<script setup lang="ts">
import AnimationBall from '~/components/AnimationBall.vue'

useSeoMeta({
  title: 'Nuxt 3 Minimal Starter',
  ogTitle: 'Nuxt 3 Minimal Starter',
})

const { x, y } = useMouse()

const colorMode = useColorMode()

const currentColor = ref('')
onMounted(() => {
  currentColor.value = colorMode.value
})

watch(colorMode, () => {
  if (colorMode.value === 'dark')
    document.documentElement.classList.add('dark')
  else
    document.documentElement.classList.remove('dark')
})

function toggleColorMode() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

function clickHandler() {
  toggleColorMode()
}

const todos = ref([
  {
    done: { v: true },
    label: 'todo 1',
  },
])
</script>

<template>
  <div>
    <h1 text-red font-italic text-3xl>
      hello world {{ x }} {{ y }}
    </h1>
    <div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
      <div class="i-vscode-icons:file-type-light-pnpm" />
      <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
    </div>
    <button @click="toggleColorMode">
      {{ currentColor }}
    </button>
    <AnimationBall m-t-20px m-x-auto />
    <u-button class="bg-gray! ml-4" @click="clickHandler">
      u-button
    </u-button>

    <div v-for="({ label, ...others }) of todos" :key="label">
      <input type="checkbox" :checked="others.done.v" @change="others.done.v = !others.done.v">
      {{ label }}
    </div>
    <u-button
      class="bg-blue-400! ml-4"
      @click="todos.push({ done: { v: true }, label: `todo ${todos.length + 1}` })"
    >
      add one
    </u-button>
  </div>
</template>
