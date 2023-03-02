import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  Personalized,
  PersonalizedNewSong,
} from "../interface/personalized";
import {
  requestPersonalized,
  requestPersonalizedNewSong,
  requestTopListDetailData,
} from "../api";
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

  const personalizedNewSong = ref<PersonalizedNewSong[]>([]);
  const getPersonalizedNewSong = async () => {
    personalizedNewSong.value = await requestPersonalizedNewSong();
  };

  return {
    topListDetailData,
    getTopListDetailData,
    personalized,
    getPersonalized,
    personalizedNewSong,
    getPersonalizedNewSong,
  };
});
