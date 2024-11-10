<script setup>
import HomeHeroMainAdBlock from './HomeHeroMainAdBlock.vue';

const mock = new Array(3).fill(null).map((_, index) => ({
  id: index+1,
  text: '品牌度题/链接/指定分类/指定商品',
  link:'#'
}))

const Ads = mock
</script>

<template>
  <div class="ad">
    <HomeHeroMainAdBlock 
      v-for="{id, ...item} in Ads"
      :key="id"
      v-bind="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.ad{
  display: flex;
  gap: 16px;
  margin-top: 16px;
}
</style>