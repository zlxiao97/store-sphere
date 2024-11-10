<script setup>
import ClassficationMenu from '@/components/home/ClassficationMenu.vue';
import HomeHeroMain from './HomeHeroMain.vue';
</script>

<template>
  <div class="home-container">
    <div
      class="module"
      style="width: 21.92%"
    >
      <ClassficationMenu />
    </div>
    <div
      class="home-container module container-right"
      style="width: 77.25%"
    >
      <div
        class="module"
        style="width: 73.35%"
      >
        <HomeHeroMain />
      </div>

      <div
        class="module"
        style="width: 25.67%"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container{
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.container-right{
  padding-top: 10px;
}

.module{
  flex: 0 0 auto;
}
</style>