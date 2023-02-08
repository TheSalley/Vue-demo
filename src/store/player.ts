import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import type { Song, SongUrl } from "../interface/song";
import { requestSongUrl } from "../api";

const KEYS = {
  volume: "PLAYER-VOLUME",
};

/**
 * @param { object } audio 音乐媒体实例
 * @param { number } loopType 循环模式 0: 单曲 1: 列表 2: 随机
 * @param { number } volume 音量
 * @param { array } playList 播放列表
 * @param { boolean } isPlaying 是否在播放中
 * @param { boolean } showPlayList 是否展示右侧抽屉的播放列表
 *
 * @function toggleLoop 切换歌曲循环模式
 * @function togglePlay 播放/暂停
 * @function setVolumn 音量设置
 */

export const usePlayerStore = defineStore("player", () => {
  let audio = ref(new Audio());
  let loopType = ref(0);
  let volume = Number(localStorage.getItem(KEYS.volume)) || 60;
  let playList = ref([] as Song[]);
  let showPlayList = ref(true);
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

  let pushPlayList = () => {};

  let togglePlay = () => {
    isPlaying.value = !isPlaying.value;
    if (!isPlaying.value) {
      audio.value.pause();
    } else {
      audio.value.play();
    }
  };

  let toggleLoop = () => {
    if (loopType.value == 2) {
      loopType.value = 0;
    } else {
      loopType.value++;
    }
  };

  let setVolumn = (n: number) => {
    n = n > 100 ? 100 : n < 0 ? 0 : n;
    volume = n;
    console.log(volume);

    audio.value.volume = n / 100;
    localStorage.setItem("PLAYER-VOLUME", n.toString());
  };

  let play = async (v: number) => {
    if (id.value == v) return;

    const data = await requestSongUrl(v);
    // console.log(data);
    audio.value.src = data.url;
    isPlaying.value = true;
    audio.value.play();
    console.log(audio.value);
  };

  return {
    loopType,
    isPlaying,
    duration,
    currentTime,
    volume,
    showPlayList,
    toggleLoop,
    togglePlay,
    setVolumn,
    play,
  };
});

export const userPlayerInit = () => {
  let timer;
  onMounted(() => {});
};
