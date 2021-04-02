<template>
  <div>
    <span>{{ $route.params.user }}</span>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters['users/getOneUser'](this.$route.params.user)
    },
  },
}
</script>
