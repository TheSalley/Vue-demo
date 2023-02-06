<template>
  <div class="flex items-center">
    <div class="flex justify-between items-center flex-shrink-0 flex-1 pr-5">
      <div class="flex flex-1 items-center flex-shrink-0 w-10">
        <IconPark
          :icon="Like"
          size="16"
          class="text-gray-500 mr-1 cursor-pointer hover:text-red-400"
        />
        <div class="truncate">
          <small>{{ song.name }}</small>
        </div>
        <IconPark
          v-if="song.mv > 0"
          :icon="PlayTwo"
          size="16"
          class="ml-2 text-orange-400 cursor-pointer"
        />
      </div>
      <div class="flex-shrink-0">
        <div class="flex items-center gap-x-1.5 text-gray-400 ml-2">
          <IconPark
            title="播放"
            :icon="PlayOne"
            size="16"
            class="hover-text"
            @click="play(song.id)"
          />
          <IconPark title="添加到" :icon="Add" size="16" class="hover-text" />
          <IconPark title="下载" :icon="DownTwo" size="16" class="hover-text" />
          <IconPark
            title="更多操作"
            :icon="MoreTwo"
            size="16"
            class="hover-text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Add,
  DownTwo,
  Like,
  MoreTwo,
  PlayOne,
  PlayTwo,
} from "@icon-park/vue-next";
import IconPark from "../../components/common/IconPark.vue";
import type { Song } from "../../interface/song";
import { usePlayerStore } from "../../store/player";

const { play } = usePlayerStore();

defineProps<{
  song: Song;
  showArName?: boolean;
  showAlName?: boolean;
}>();
</script>
