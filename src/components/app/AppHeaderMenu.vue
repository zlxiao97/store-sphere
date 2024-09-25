<script setup>
import AppHeaderMenuItem from '@/components/app/AppHeaderMenuItem.vue';
import DropDownQRCode from '@/components/app/DropDownQRCode.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import phoneIcon from '@/assets/icons/phone.svg'
import BaseLink from '@/components/base/BaseLink.vue';
</script>

<template>
  <div class="menu">
    <AppHeaderMenuItem is-first>
      <span><BaseLink>您好，</BaseLink><BaseLink type="primary">请登录</BaseLink></span>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem>
      <BaseLink>
        免费注册
      </BaseLink>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem>
      <BaseLink>
        个人中心
      </BaseLink>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem>
      <BaseLink>
        我的订单
      </BaseLink>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem>
      <BaseLink>
        帮助中心
      </BaseLink>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem padding="small">
      <BaseIcon :src="phoneIcon" />
      <BaseLink type="primary">
        400-8888-8888
      </BaseLink>
    </AppHeaderMenuItem>
    <AppHeaderMenuItem>
      <DropDownQRCode />
    </AppHeaderMenuItem>
  </div>
</template>

<style lang="scss" scoped>
.menu{
  display: flex;
  gap: 16px;
  font-size: 13px;
}
</style>