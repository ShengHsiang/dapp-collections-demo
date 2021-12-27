<template>
  <BaseLayout>
    <div class="mx-auto px-4 2xl:px-8 py-4 md:py-8 max-w-xl">
      <Loading v-if="loading" />

      <section v-if="!loading">
        <nav class="flex items-center">
          <router-link
            :to="{ name: 'Home' }"
            class="
              block
              text-lg
              md:text-2xl
              text-white
              rounded
              px-4
              md:px-8
              py-1
              md:py-2
              bg-blue-500
              hover:bg-blue-700
            "
          >
            ←
          </router-link>

          <h2 class="text-white text-lg md:text-2xl font-weight ml-4">
            {{ asset.collection.name }}
          </h2>
        </nav>

        <div>
          <img
            :src="asset.image_url"
            :alt="asset.name"
            class="w-full object-cover"
          />
          <h3 class="text-yellow-600 text-lg md:text-2xl font-bold text-center mb-4">
            {{ asset.name }}
          </h3>
          <p class="text-white mb-4 line-clamp-5">{{ asset.description }}</p>
          <a
            :href="asset.permalink"
            class="link-button text-white bg-blue-500 px-4 py-2 rounded"
            >Link to</a
          >
        </div>
      </section>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout'
import Loading from '@/components/Loading'
import { getAssetsDetail } from '@/apis/opensea.js'

export default {
  name: 'Detail',
  components: {
    BaseLayout,
    Loading
  },
  data () {
    return {
      loading: true,
      contractAddress: this.$route.params.contractAddress,
      tokenId: this.$route.params.tokenId,
      asset: null
    }
  },
  mounted () {
    this.fetchAssetDetail(this.contractAddress, this.tokenId)
  },
  methods: {
    async fetchAssetDetail (contractAddress, tokenId) {
      try {
        const { data } = await getAssetsDetail({ contractAddress, tokenId })
        this.asset = data
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
