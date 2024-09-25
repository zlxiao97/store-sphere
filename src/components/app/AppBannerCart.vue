<script setup>
import cartIcon from '@/assets/icons/cart.svg'
import BaseIcon from '@/components/base/BaseIcon.vue';
</script>

<template>
  <el-button
    class="cart-button"
    size="large"
  >
    <div class="button-content">
      <BaseIcon :src="cartIcon" />
      <span>购物车(2)</span>
    </div>
  </el-button>
</template>

<style lang="scss" scoped>
.cart-button{
  width: 150px;
  color: #004EA2;
}

.button-content{
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  line-height: 1.32;
  letter-spacing: 0.1em;
}
</style>