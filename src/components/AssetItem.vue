<template>
  <a
    class="
      block
      border border-gray-500
      rounded
      cursor-pointer
      hover:shadow-lg
      max-w-xl
    "
    @click="handleClickItem"
  >
    <img :src="asset.image_url" :alt="asset.name" class="w-full object-cover" />
    <div class="flex flex-col items-center p-4">
      <h2 class="text-white mb-4">{{ asset.name }}</h2>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AssetItem',
  props: {
    asset: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClickItem () {
      this.$router.push({
        name: 'Detail',
        params: {
          contractAddress: this.asset.asset_contract.address,
          tokenId: this.asset.token_id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
