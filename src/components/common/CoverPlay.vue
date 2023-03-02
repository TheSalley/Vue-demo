<template>
  <div class="cover-play-image">
    <el-image
      :src="picUrl"
      :alt="name"
      class="w-full bg-gray-50 object-cover"
    />
    <div class="flex justify-center items-center mask">
      <IconPark
        :icon="PlayOne"
        theme="filled"
        :size="50"
        class="text-white opacity-0 transition-opacity hover:text-teal-400 play-icon"
        @click="onPlay as () => void"
      />
    </div>
    <div class="play-count" v-if="showPlayCount">
      <IconPark :icon="video ? Play : Headset" class="mr-1" :size="12" />
      <span>{{ useNumberFormat(playCount as number) }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PlayOne, Play, Headset } from "@icon-park/vue-next";
import IconPark from "./IconPark.vue";
import { useNumberFormat } from "../../utils/format";

defineProps<{
  picUrl: string;
  playCount?: number;
  name?: string;
  showPlayCount?: boolean;
  onPlay?: () => void;
  video?: boolean;
}>();
</script>

<style lang="scss" scoped>
.cover-play-image {
  @apply rounded-lg cursor-pointer transition-all relative overflow-hidden;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }

  .play-count {
    @apply absolute bottom-2 right-1 text-white text-xs bg-black bg-opacity-80 px-2 rounded-full py-0.5 flex items-center transition-all scale-90
  }

  &:hover {
    .mask {
      @apply bg-opacity-50;
      .play-icon {
        @apply opacity-100;
      }
    }
  }
}
</style>
