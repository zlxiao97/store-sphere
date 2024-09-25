<script setup>
import AppHeader from '@/components/app/AppHeader.vue';
import { useHeaderHeight } from '@/composables/useHeaderHeight';
import { computed } from 'vue';

const { headerHeight } = useHeaderHeight()

const mainStyle = computed(()=>({
  paddingTop: `${headerHeight.value}px`
}))

</script>

<template>
  <div class="container">
    <header id="header">
      <div class="max-width">
        <AppHeader />
      </div>
    </header>
    <main
      class="max-width"
      :style="mainStyle"
    >
      <router-view />
    </main>
    <footer />
  </div>
</template>

<style lang="less" scoped>
// 限制 Header 和 Main 的最大宽度
.max-width{
  max-width: 1200px;
  margin: 0 auto;
}

.container{
  min-height: 100vh;
  background-color: #F2F2F2;
}

#header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #FFFFFF;
}
</style>
