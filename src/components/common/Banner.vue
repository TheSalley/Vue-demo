<script setup lang="ts">
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay } from "swiper"
import { useBannerStore } from "../../store/banner";
import { storeToRefs } from "pinia";
const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

const modules = [Navigation, Autoplay]

onMounted(async () => {
  await getBanners();
});
</script>
<template>
  <Swiper :modules="modules" :navigation="true" :autoplay="true">
    <SwiperSlide v-for="(item, index) in banners" :key="index">
      <img :src="item.imageUrl" class="banner_image"
    /></SwiperSlide>
  </Swiper>
</template>
<style lang="scss" scoped>
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full;
  }
}
.banner_image {
  @apply cursor-pointer;
}
</style>
