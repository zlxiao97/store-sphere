<script setup>
import addressIcon from '@/assets/icons/address.svg'
import downIcon from '@/assets/icons/down.svg'
import BaseIcon from '../base/BaseIcon.vue';
</script>

<template>
  <div class="dropdown">
    <BaseIcon
      class="address-icon"
      :src="addressIcon"
    />
    <span class="address">浙江省杭州市</span>
    <BaseIcon :src="downIcon" />
  </div>
</template>

<style lang="scss" scoped>
.dropdown{
  display: flex;
  align-items: center;
  .address-icon{
    margin-right: 4px;
  }
  .address{
    font-family: PingFang SC;
    font-size: 14px;
    line-height: 1.4;
    color: #787878;
    margin-right: 8px;
  }
}
</style>