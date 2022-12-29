<script setup lang="ts">
import { PlayOne, Play, Headset } from "@icon-park/vue-next";
import IconPark from "./IconPark.vue";

defineProps<{
  picUrl: string;
  playCount?: number;
  name?: string;
  showPlayCount?: boolean;
  onPlay?: () => void;
  video?: boolean;
}>();
</script>
<template>
  <div class="cover-play-image">
    <el-image :src="picUrl" :alt="name" class="w-full bg-gray-50 object-cover"/>
    <div class="flex justify-center items-center"></div>
  </div>
</template>

<style lang="scss" scoped>
.cover-play-image {
  @apply rounded-lg cursor-pointer transition-all relative overflow-hidden;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }
}
</style>
