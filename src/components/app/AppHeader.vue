<script setup>
import AppHeaderMenu from '@/components/app/AppHeaderMenu.vue';
import DropDownAddress from './DropDownAddress.vue';
</script>

<template>
  <div class="app-header">
    <DropDownAddress />
    <AppHeaderMenu />
  </div>
</template>

<style lang="scss" scoped>
.app-header{
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
}
</style>