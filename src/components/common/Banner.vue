<script setup lang="ts">
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper"
import { useBannerStore } from "../../store/banner";
import { storeToRefs } from "pinia";
const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

const modules = [Pagination, Autoplay]

onMounted(async () => {
  await getBanners();
});
</script>
<template>
  <Swiper :modules="modules" pagination :autoplay="true">
    <SwiperSlide v-for="(item, index) in banners" :key="index">
      <img :src="item.imageUrl" class="banner_image"/>
    </SwiperSlide>
  </Swiper>
</template>
<style lang="scss" scoped>
.swiper {
  @apply -mx-2.5;
  .swiper-slide {
    @apply w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4 px-2.5;
  }
}
.banner_image {
  @apply cursor-pointer rounded-lg transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
