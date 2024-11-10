<script setup>
import { ref } from 'vue';
import swiperSVG from '@/assets/swiper.svg'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const swiperProps = {
  class: "home-swiper",
  'slides-per-view': 1,
  'space-between': 10,
  pagination: true,
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }
}

const mock = new Array(3).fill(null).map((_, index) => ({id: index + 1}))

const slides = ref(mock)

</script>

<template>
  <swiper
    v-bind="swiperProps"
  >
    <swiper-slide       
      v-for="{id} in slides"
      :key="id"
    >
      <a href="#">
        <div style="position: relative;">
          <!-- TODO: 替换占位图、删除文字 -->
          <img
            :src="swiperSVG"
            style="width: 100%;"
            alt="swiperSVG"
          >
          <span class="text-center">
            轮播图 {{ id }}
          </span>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.home-swiper{
  border-radius: 6px;
  font-weight: 700;
  color: #575B66;
  font-size: 16px;
  letter-spacing: 0.1em;
}

.text-center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>