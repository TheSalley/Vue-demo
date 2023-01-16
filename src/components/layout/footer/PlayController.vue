<template>
  <div class="flex justify-center items-center gap-x-3">
    <IconPark
      :icon="loopType === 0 ? PlayOnce : loopType === 1 ? LoopOnce : ShuffleOne"
      size="20"
      :stroke-width="3"
      class="hover-text"
      @click="toggleLoop"
    />
    <IconPark :icon="GoStart" size="28" theme="filled" class="hover-text" />
    <IconPark
      :icon="isPlaying ? Play : PauseOne"
      size="45"
      theme="filled"
      class="hover-text text-emerald-400"
      @click="togglePlay"
    />
    <IconPark :icon="GoEnd" size="28" class="hover-text" />
    <el-popover placement="top" width="50px">
      <template #reference>
        <IconPark
          :icon="VolumeSmall"
          size="20"
          :stroke-width="3"
          class="hover-text"
        />
      </template>
      <PlayVolumeSlider />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import {
  Play,
  PauseOne,
  LoopOnce,
  ShuffleOne,
  PlayOnce,
  GoEnd,
  GoStart,
  VolumeSmall,
} from "@icon-park/vue-next";
import IconPark from "../../common/IconPark.vue";
import PlayVolumeSlider from "./PlayVolumeSlider.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "../../../store/player";

const { toggleLoop, togglePlay } = usePlayerStore();
let { loopType, isPlaying } = storeToRefs(usePlayerStore());
</script>

<style lang="scss" scoped>

</style>
