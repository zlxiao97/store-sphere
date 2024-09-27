<script setup>
import ClassficationMenu from '@/components/home/ClassficationMenu.vue';
</script>

<template>
  <div class="hero">
    <div
      class="module"
      style="width: 22.29%"
    >
      <ClassficationMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero{
  display: flex;
  justify-content: space-between;
}

.module{
  flex: 0 0 auto;
}
</style>