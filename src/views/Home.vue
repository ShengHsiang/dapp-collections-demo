<template>
  <BaseLayout>
    <div class="container mx-auto px-2 2xl:px-8 py-4 md:py-8">
      <Loading v-if="loading" />

      <h2 class="text-sm md:text-base text-center text-white mb-4 line-clamp-2">{{ account }}</h2>

      <!-- Has assets -->
      <section
        v-infinite-scroll="fetchAccountAssets(account)"
        v-if="!loading && assetsList.length > 0"
        class="grid grid-cols-2 gap-4 md:gap-8"
      >
        <template v-for="asset of assetsList">
          <AssetItem :key="asset.id" :asset="asset" />
        </template>
      </section>

      <!-- No assets found. -->
      <section v-if="!loading && assetsList.length === 0">
        <p class="text-center text-white">
          No assets found.
        </p>
      </section>
    </div>
  </BaseLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAssetsList } from '@/apis/opensea'
import BaseLayout from '@/layouts/BaseLayout'
import Loading from '@/components/Loading'
import AssetItem from '@/components/AssetItem'
const DEFAULT_LIMIT = 20

export default {
  name: 'Home',
  components: {
    BaseLayout,
    AssetItem,
    Loading
  },
  data () {
    return {
      loading: true,
      offset: 0,
      assetsList: []
    }
  },
  computed: {
    ...mapGetters('wallet', {
      account: 'getAccount'
    })
  },
  mounted () {
    this.fetchAccountAssets(this.account)
  },
  watch: {
    account (newAccount) {
      this.resetAssetsList()
      this.fetchAccountAssets(newAccount)
    }
  },
  methods: {
    async fetchAccountAssets (account) {
      try {
        const query = {
          owner: account,
          offset: this.offset,
          limit: DEFAULT_LIMIT
        }
        const { data } = await getAssetsList(query)
        if (data.assets.length > 0) {
          this.assetsList = [...this.assetsList, ...data.assets]
          this.offset += data.assets.length
        }
        this.loading = false
      } catch (error) {
        console.log(error)
      }
    },
    resetAssetsList () {
      this.offset = 0
      this.assetsList = []
    }
  }
}
</script>
