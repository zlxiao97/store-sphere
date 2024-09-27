<script setup>
import { ref } from 'vue';
import ClassficationMenuItem from './ClassficationMenuItem.vue';

const mock = [
  {
    id: 1,
    classfication: '办公/清洁/照明/制冷暖通',
    example: '办公用纸 灯且 工业擦'
  },
  {
    id: 2,
    classfication: '粮油副食/休闲零食/日用百货',
    example: '粮油 蜜饯核果 饼干糕点 纸品瀑巾'
  },
  {
    id: 3,
    classfication: '中低压配电/工控电动化',
    example: '断路螽 接触器 开关电源 变频器'
  },
  {
    id: 4,
    classfication: '搬运/存储/包材/起重吊装',
    example: '搬运车 货架 吊带 梯子'
  },
  {
    id: 5,
    classfication: '仪表仪器/道具/圣具/磨具',
    example: '卡尺 切割片 万用表毒'
  },
  {
    id: 6,
    classfication: '气动/机械传动',
    example: '电础阀 气缸 接头 气源处理'
  },
  {
    id: 7,
    classfication: '企业福利/紧急教护',
    example: '休闲食品 家纺布艺 环境淌毒'
  },
]

const classfications = ref(mock)

</script>

<template>
  <div class="menu">
    <ClassficationMenuItem
      v-for="{id, ...item} in classfications"
      :key="id"
      v-bind="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.menu{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  background-color: #FFFFFF;
}
</style>