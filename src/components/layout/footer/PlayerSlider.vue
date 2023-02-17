<template>
  <div class="player-slider">
    <el-slider
      :show-tooltip="false"
      v-model="currentTime"
      :min="0"
      :max="duration"
      @change="onSliderChange"
      @input="onSliderInput"
    />
  </div>
</template>
<script setup lang="ts">
import { usePlayerStore } from "../../../store/player";
import { storeToRefs } from "pinia";

let { onSliderChange, onSliderInput } = usePlayerStore();
let { currentTime, duration } = storeToRefs(usePlayerStore());
</script>
<style lang="scss" scoped>
.player-slider ::v-deep {
  .el-slider {
    height: 10px;
    .el-slider__runway,
    .el-slider__bar {
      height: 2px;
      border-radius: 0;
      @apply dark:bg-[#343435];
    }
    .el-slider__button-wrapper {
      @apply opacity-0 transition-opacity;
      width: 10px;
      height: 10px;
      top: -10.5px;
    }
    &:hover {
      .el-slider__button-wrapper {
        @apply opacity-100;
        top: -8.5px;
      }
    }
    .el-slider__button {
      width: 8px;
      height: 8px;
      @apply bg-emerald-400;
    }
  }
}
</style>
