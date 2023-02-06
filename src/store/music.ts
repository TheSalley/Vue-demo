import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  Personalized,
  PersonalizedNewSong,
} from "../interface/personalized";
import { requestPersonalized, requestTopListDetailData } from "../api";
import { TopListDetail } from "../interface/toplist_detail";

export const useMusicStore = defineStore("music", () => {
  const topListDetailData = ref<TopListDetail[]>([]);
  const getTopListDetailData = async () => {
    topListDetailData.value = await requestTopListDetailData();
  };

  const personalized = ref<Personalized[]>([]);
  const getPersonalized = async () => {
    personalized.value = await requestPersonalized();
  };

  return {
    topListDetailData,
    getTopListDetailData,
    personalized,
    getPersonalized,
  };
});
