<template>
  <div :class="classDependingOfType" class="rounded max-w-xs h-16 mx-auto flex justify-center items-center">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    classDependingOfType() {
      return {
        error: 'bg-red-300 text-red-600',
        warning: 'bg-yellow-300 text-yellow-600',
        info: 'bg-blue-300 text-blue-600',
      }[this.type]
    },
  },
}
</script>
