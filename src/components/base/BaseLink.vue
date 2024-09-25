<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'primary'].includes(value)
    }
  }
})

const linkClass = computed(()=>({
  link: true,
  [`link-${props.type}`]: true
}))

</script>

<template>
  <a :class="linkClass"><slot /></a>
</template>

<style lang="scss" scoped>
.link{
  font-size: 13px;
  line-height: 1.32;
  letter-spacing: 0.1em;
  cursor: pointer;
}
.link-primary{
  color: #004EA2;
}
</style>