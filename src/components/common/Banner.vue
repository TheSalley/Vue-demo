<template>
  <div class="box">
    <!-- <Swiper :modules="modules" pagination :autoplay="false">
      <SwiperSlide v-for="(item, index) in banners" :key="index" class="flex">
        <img :src="item.imageUrl" alt="banner" />
      </SwiperSlide>
    </Swiper> -->
  </div>
</template>
<script setup lang="ts">
import { reactive, onMounted, watchEffect } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useBannerStore } from "../../store/banner";
import { storeToRefs } from "pinia";

const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

const modules = [Pagination, Autoplay];

onMounted(async () => {
  await getBanners();
});
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
.swiper {
  // @apply -mx-2.5;
  // @apply -mx-2.5;
  // width: 100%;
  .swiper-slide {
  }
}
img {
  // @apply w-full;
  @apply cursor-pointer rounded-lg transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
