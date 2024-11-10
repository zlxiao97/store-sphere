<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: '#'
  },
})
</script>

<template>
  <a :href="link">
    <div class="ad-block">
      <span>{{ text }}</span>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.ad-block{
  width: 217px;
  height: 96px;
  padding: 28px 8px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #575B66;
  background: no-repeat center/100% url(@/assets/ad.svg);
}
</style>