<script setup>
import searchIcon from '@/assets/icons/search.svg'
import BaseIcon from '@/components/base/BaseIcon.vue';
import BaseLink from '../base/BaseLink.vue';
import { ref } from 'vue';

const mock = [
  {
    id: 1,
    keyword:'限时特惠',
    link:'#'
  },
  {
    id: 2,
    keyword:'办公用品',
    link:'#'
  },
  {
    id: 3,
    keyword:'生活用纸',
    link:'#'
  },
]

const keywords = ref(mock)

</script>

<template>
  <div class="search-container">
    <div class="search">
      <el-input
        class="search-input"
        value=""
        size="large"
        placeholder="请输入商品名称/品牌/型号/规格/商品编码搜索"
      />
      <el-button
        class="search-button"
        size="large"
        type="primary"
      >
        <div class="button-content">
          <BaseIcon :src="searchIcon" />
          <span>搜索</span>
        </div>
      </el-button>
    </div>
    <div class="search-keywords">
      <BaseLink
        v-for="{id, keyword, link} in keywords"
        :key="id"
        :href="link"
      >
        {{ keyword }}
      </BaseLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-container{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-input{
  width: 646px;
  font-size: 14px;
  line-height: 1.32;
  letter-spacing: 0.1em;
}

.search-button{
  width: 100px;
}

.button-content{
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 1.32;
  letter-spacing: 0.1em;
}

.search-keywords{
  display: flex;
  gap: 24px;
  color: #787878;
  font-size: 12px;
}
</style>