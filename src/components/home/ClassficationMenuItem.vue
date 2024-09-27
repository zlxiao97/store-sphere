<script setup>
import BaseLink from '../base/BaseLink.vue';

defineProps({
  classfication: {
    type: String,
    default: ''
  },
  example: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="menu-item">
    <div class="title">
      <BaseLink>{{ classfication }}</BaseLink>
    </div>
    <div class="subtitle">
      <BaseLink>{{ example }}</BaseLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item{
  display: flex;
  flex-direction: column;
}
.title{
  color: #606266;
  font-size: 16px;
}
.subtitle{
  color: #BCBCBC;
  font-size: 14px;
}
</style>