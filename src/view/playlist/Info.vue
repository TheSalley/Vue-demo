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
        <div class="flex items-center text-xs pb-2 pt-3 text-dc">
          <el-avatar :src="playlist.creator.avatarUrl" size="small" round />
          <span class="ml-2">{{ playlist.creator.nickname }}</span>
          <div class="flex ml-5 text-dc">
            <div
              class="ml-2 __hover-text"
              v-for="tag in playlist.tags"
              :key="tag"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
        <div class="text-xs text-gray-500 leading-normal">
          <MoreText :text="playlist.description" :end="90"/>
        </div>
      </div>
      <div class="flex justify-self-stretch items-center mt-5 gap-x-2">
        <button class="w-32 button">
          <IconPark :icon="PlayOne" size="22" class="mr-1" />
          <span>播放全部</span>
        </button>
        <button class="w-32 button-outline">
          <IconPark :icon="Like" size="18" class="mr-1" />
          <span>收藏</span>
        </button>
        <button class="w-8 button-outline">
          <IconPark :icon="More" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PlayOne, Like, More } from "@icon-park/vue-next";
import MoreText from "../../components/common/MoreText.vue";
import IconPark from "../../components/common/IconPark.vue";
import type { PlayListDetail } from "../../interface/playlist";

defineProps<{
  playlist: PlayListDetail;
  playAll?: () => void;
}>();
</script>
