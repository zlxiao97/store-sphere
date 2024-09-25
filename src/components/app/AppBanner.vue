<script setup>
import AppBannerCart from './AppBannerCart.vue';
import AppBannerSearch from './AppBannerSearch.vue';
import AppLogo from './AppLogo.vue';
</script>

<template>
  <div class="banner">
    <AppLogo />
    <div class="banner-actions">
      <AppBannerSearch />
      <AppBannerCart />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner{
  display: flex;
  gap: 16px;
  padding: 28px 32px 28px 0;
}

.banner-actions{
  display: flex;
  margin-top: 20px;
  gap: 32px;
}
</style>