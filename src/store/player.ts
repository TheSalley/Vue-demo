import { defineStore } from "pinia";
import { ref } from "vue";
import type { Song, SongUrl } from "../interface/song";

const KEYS = {
  volume: "PLAYER-VOLUME",
};

/**
 * @param audio 音乐媒体
 * @param loopType 循环模式 0: 单曲 1: 列表 2: 随机
 * @param volume 音量
 * @param playList 播放列表
 */

export const usePlayerStore = defineStore("player", () => {
  let audio = ref(new Audio());
  let loopType = ref(0);
  let volume = Number(localStorage.getItem(KEYS.volume)) || 60;
  let playList = ref([] as Song[]);
  let showPlayList = ref(false);
  let id = ref(0);
  let url = ref("");
  let songUrl = ref({} as SongUrl);
  let song = ref({} as Song);
  let isPlaying = ref(false);
  let sliderInput = ref(false);
  let ended = ref(false);
  let muted = ref(false);
  let currentTime = ref(0);
  let duration = ref(0);

  let playListCount = () => {
    return playList.value.length;
  };

  let thisIndex = () => {
    return playList;
  };

  let init = () => {
    audio.value.volume = volume / 100;
  };

  let pushPlayList = () => {

  } 

  return {
    duration,
    currentTime
  }
});
