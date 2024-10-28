<script setup lang="ts">
const router = useRouter()
const menus = computed(() => router.options.routes.toSorted((a, b) => a.path.localeCompare(b.path)))
</script>

<template>
  <div flex="~ col gap-2">
    <nuxt-link
      v-for="menu in menus"
      :key="menu.path"
      bg="red/30 hover:red/80"
      rounded-lg p-2 duration-500
      :to="menu.path"
    >
      {{ menu.name || menu.path }}
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>
