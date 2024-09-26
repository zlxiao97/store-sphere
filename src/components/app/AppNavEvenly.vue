<script setup>
import BaseLink from '../base/BaseLink.vue';

</script>

<template>
  <div class="nav-evenly">
    <BaseLink type="primary">
      首页
    </BaseLink>
    <BaseLink>
      员工福利
    </BaseLink>
    <BaseLink>
      行政物资
    </BaseLink>
    <BaseLink>
      施工材料
    </BaseLink>
    <BaseLink>
      协议专区
    </BaseLink>
    <BaseLink>
      招采中心
    </BaseLink>
    <BaseLink>
      企业资讯
    </BaseLink>
  </div>
</template>

<style lang="scss" scoped>
.nav-evenly{
  display: flex;
  gap: 46.5px;
}
</style>