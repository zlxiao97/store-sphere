<script setup>
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore()

const { name } = storeToRefs(appStore)

</script>

<template>
  <div class="home-page">
    <el-text
      class="mx-1"
      type="primary"
    >
      Home Page
    </el-text>
    <p>Welcome to the {{ name }} Home Page</p>
    <router-link to="/about">
      Go to About Page
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.home-page {
  h1 {
    color: #3498db;
  }
}
</style>
