<script setup>
import { computed } from 'vue';

const props = defineProps({
  padding: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'small', 'large'].includes(value)
    }
  },
  isFirst: {
    type:Boolean,
  }
})

const itemClass = computed(()=>({
  "menu-item": true,
  "small-padding": props.padding==='small',
  "first-item": props.isFirst
}))

</script>

<template>
  <div :class="itemClass">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.menu-item{
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  border-left: 1px solid #DCDFE6;
  color: #BCBCBC;
}

.small-padding{
  padding-left: 9px;
}

.first-item{
  padding: 0;
  border: none;
}
</style>