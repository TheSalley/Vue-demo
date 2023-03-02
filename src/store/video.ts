import { defineStore } from "pinia";
import { ref } from "vue";
import type { PersonalizedMv } from "../interface/personalized";
import type { PersonalizedPrivateContent } from "../interface/video";
import {
  requestPersonalizedMv,
  requestPersonalizedPrivateContentList,
} from "../api";

export const useVideoStore = defineStore("video", () => {
  const personalizedMv = ref<PersonalizedMv[]>([]);
  const getPersonalizedMv = async () => {
    personalizedMv.value = await requestPersonalizedMv();
  };

  const personalizedPrivateContent = ref<PersonalizedPrivateContent[]>([]);
  const getPersonalizedPrivateContent = async () => {
    personalizedPrivateContent.value =
      await requestPersonalizedPrivateContentList(4);
  };

  return {
    personalizedMv,
    getPersonalizedMv,
    personalizedPrivateContent,
    getPersonalizedPrivateContent,
  };
});
