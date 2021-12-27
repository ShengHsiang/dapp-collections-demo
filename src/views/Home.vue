<template>
  <div class="h-screen bg-gray-800">
    <h1 class="text-white">{{ datas }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters('static', {
      datas: 'datas'
    })
  }
}
</script>
