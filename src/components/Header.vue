<template>
  <header
    class="py-2 px-4 md:px-8 flex justify-between items-center bg-gray-900"
  >
    <h1 class="text-white md:text-2xl font-bold">Demo</h1>
    <button
      class="px-4 py-2 bg-blue-600 rounded text-white"
      @click="handleConnectWallet"
    >
      connect wallet
    </button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleConnectWallet () {
      this.$store.dispatch('wallet/connectToMetamask')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
