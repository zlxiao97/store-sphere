<script setup>
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
  <object
    type="image/svg+xml"
    :data="src"
  />
</template>

<style lang="scss" scoped>

</style>