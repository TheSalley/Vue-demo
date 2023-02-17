<template>
  <Swiper :modules="modules" pagination :autoplay="false" v-if="list.length > 0">
    <SwiperSlide v-for="(item, index) in list" :key="index" class="flex ">
      <!-- <img :src="i?.imageUrl" class="banner_image" v-for="i in item"/> -->
      {{ list }}
      <!-- <span v-for="(i, j) in item" :key="j">{{ i ?? "@" }}</span> -->
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
import { reactive, onMounted, watchEffect } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { useBannerStore } from "../../store/banner";
import { storeToRefs } from "pinia";
import { useScreenWidth } from "../../utils/useScreenWidth";

const { banners } = storeToRefs(useBannerStore());
const { getBanners } = useBannerStore();

const modules = [Pagination, Autoplay];

let list = reactive<any>([])

onMounted(async () => {
  await getBanners();
});

const { screen_width } = useScreenWidth();

const [a1, a2, a3, a4, a5, a6, a7, a8] = banners.value;
watchEffect(() => {
  if (screen_width.value < 1024) {
    list = [
      [a1, a2] as any,
      [a3, a4] as any,
      [a5, a7] as any,
      [a7, a8] as any,
    ];
  } else {
    list = [
      [a1, a2, a3] as any,
      [a4, a5, a6] as any,
      [a7, a8, a1] as any,
    ];
  } 
  console.log(list)
})
    
</script>
<style lang="scss" scoped>
.swiper {
  // @apply -mx-2.5;
  .swiper-slide {
    @apply w-full;
  }
}
.banner_image {
  @apply lg:w-1/2 xl:w-1/3;
  @apply cursor-pointer rounded-lg transition-all object-cover;
  @apply hover:shadow hover:opacity-80;
}
</style>
