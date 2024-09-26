<script setup>
import AppNavEvenly from './AppNavEvenly.vue';
import AppNavTitle from './AppNavTitle.vue';

</script>

<template>
  <div class="nav">
    <AppNavTitle />
    <AppNavEvenly />
  </div>
</template>

<style lang="scss" scoped>
.nav{
  display: flex;
  align-items: center;
  gap: 46.5px;
}
</style>