import { defineStore } from "pinia";
import { ref } from "vue";
import type { Banner } from "../interface/banner";
import { requestBanner } from "../api";

export const useBannerStore = defineStore("banner", () => {
  let banners = ref<Banner[]>([]);
  const getBanners = async () => {
    document.body.clientWidth;
    banners.value = await requestBanner();
  };

  return {
    banners,
    getBanners,
  };
});
