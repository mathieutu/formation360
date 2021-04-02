<template>
  <div class="">
    <button class="m-4 bg-pink-800 px-4 py-2 text-2xl text-white rounded-xl" @click="$fetch">
      Refetch
    </button>
    <div v-if="$fetchState.pending" class="absolute inset-0 bg-black opacity-50 text-white flex justify-center items-center text-3xl">
      <button class="m-4 bg-pink-800 px-4 py-2 text-2xl text-white rounded-xl" @click="$fetch">
        Refetch
      </button>
      Loading...
    </div>
    <Nuxt />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  fetch() {
    return Promise.all([
      new Promise((resolve) => {
        setTimeout(resolve, 3000)
      }),
      this.fetchUsers(),
    ])
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
  },
}
</script>
