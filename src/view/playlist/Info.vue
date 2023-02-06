<template>
  <div class="flex items-stretch">
    <img
      :src="playlist.coverImgUrl"
      alt=""
      class="w-44 h-44 object-cover rounded-xl flex-shrink-0"
    />
    <div class="flex flex-col justify-between flex-1 pl-5 py-1">
      <div>
        <div class="text-2xl font-bold">{{ playlist.name }}</div>
        <div class="flex items-center text-xs pb-2 pt-3">
          <el-avatar :src="playlist.creator.avatarUrl" size="small" round />
          <span class="ml-2">{{ playlist.creator.nickname }}</span>
          <div class="flex ml-5">
            <div
              class="ml-2 hover-text"
              v-for="tag in playlist.tags"
              :key="tag"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal"></div>
      </div>
      <div class="flex"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayOne, Like, More } from "@icon-park/vue-next";
import IconPark from "../../components/common/IconPark.vue";
import type { PlayListDetail } from "../../interface/playlist";

defineProps<{
  playlist: PlayListDetail;
  playAll?: () => void;
}>();
</script>
