<template>
  <div>
    About
    <nuxt-link to="/">
      Home
    </nuxt-link>

    <pre>
      {{ users }}
    </pre>
  </div>
</template>

<script type="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  layout: 'users',
  computed: {
    ...mapState('users', { users: 'usersList' }),
  },
})
</script>
