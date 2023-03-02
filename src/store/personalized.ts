import { defineStore } from "pinia";
import { ref } from "vue";
import type { Djprogram } from "../interface/personalized";
import { requestPersonalizedDjprogram } from "../api";

export const usePersonalizedStore = defineStore("personalized", () => {
  const djprogram = ref<Djprogram[]>([]);
  const getDjprogram = async () => {
    djprogram.value = await requestPersonalizedDjprogram();
  };

  return {
    djprogram,
    getDjprogram
  };
});
