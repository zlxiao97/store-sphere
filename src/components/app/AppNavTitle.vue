<script setup>
import classficationIcon from '@/assets/icons/classfication.svg'
import BaseIcon from '@/components/base/BaseIcon.vue';
</script>

<template>
  <div class="nav-title">
    <BaseIcon :src="classficationIcon" />
    <span class="title-text">
      全部商品分类
    </span>
  </div>    
</template>

<style lang="scss" scoped>
.nav-title{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 36px;
  background-color: #004EA2;
  color: #FFFFFF;
  border-radius: 4px 4px 0px 0px;
}

.title-text{
  font-size: 16px;
  line-height: 1.32;
  letter-spacing: 0.1em;
}
</style>