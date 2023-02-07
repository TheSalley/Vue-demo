<template>
  <el-drawer
    v-model="showPlayList"
    size="320px"
    :modal="false"
    :show-close="false"
    :with-header="false"
  >
    <div class="h-screen flex flex-col">
      <!-- 上边 -->
      <div class="p-2.5 flex-shrink-0">
        <div class="text-xl">播放列表</div>
        <div class="text-xs mt-1 flex justify-between items-center">
          <div>共 {{ 10 }} 首歌曲</div>
          <div class="flex items-center">
            <IconPark :icon="Delete" />
            <span class="ml-0.5">清空</span>
          </div>
        </div>
      </div>
      <!-- 下边 -->
      <div class="flex-1 overflow-hidden">
        <el-scrollbar>
          <PlayListItem v-for="song in playList" :key="song.id" :song="song" />
        </el-scrollbar>
      </div>
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import IconPark from "../../common/IconPark.vue";
import { Delete } from "@icon-park/vue-next";
import PlayListItem from "./PlayListItem.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "../../../store/player";

const { showPlayList } = storeToRefs(usePlayerStore());

let playList = [
  {
    id: 1,
    name: "阿迪斯",
    mv: 0,
    al: {
      id: 123,
      name: 'xxx',
      picUrl:
        "https://p2.music.126.net/pwBA9COg9G8bUw0GOUlDzQ==/109951168271926504.jpg",
    },
    ar: [
      {
        id: 123,
        name: "阿瓦达",
      },
    ],
  },
  {
    id: 2,
    name: "飞洒发",
    mv: 1,
    al: {
      id: 333,
      name: 'xxx',
      picUrl:
        "https://p2.music.126.net/pwBA9COg9G8bUw0GOUlDzQ==/109951168271926504.jpg",
    },
    ar: [
      {
        id: 333,
        name: "阿瓦达",
      },
    ],
  },
];
</script>
