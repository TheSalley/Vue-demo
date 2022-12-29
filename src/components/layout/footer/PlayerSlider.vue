<script setup lang="ts">
import { usePlayerStore } from "../../../store/player";
import { storeToRefs } from "pinia";

let { currentTime, duration } = storeToRefs(usePlayerStore());
</script>
<template>
  <div class="player-slider">
    <el-slider
      :show-tooltip="false"
      v-model="currentTime"
      :min="0"
      :max="duration"
    />
  </div>
</template>
<style lang="scss" scoped>
.player-slider {
  .el-slider {
    height: 10px;
  }
}
</style>
