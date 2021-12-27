<template>
  <div>
    <Header />

    <main class="bg-gray-800 min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'BaseLayout',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>
