<script setup>
import downIcon from '@/assets/icons/down.svg'
</script>

<template>
  <div class="dropdown">
    <span class="mobile">手机商城</span>
    <BaseIcon :src="downIcon" />
  </div>
</template>

<style lang="scss" scoped>
.dropdown{
  display: flex;
  align-items: center;
  .mobile{
    font-size: 13px;
    line-height: 1.4;
    letter-spacing: 0.1em;
    color: #BCBCBC;
    margin-right: 8px;
  }
}
</style>