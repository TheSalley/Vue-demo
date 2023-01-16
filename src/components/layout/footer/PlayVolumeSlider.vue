<template>
  <div class="flex flex-col items-center pt-2">
    <div>
      <el-slider
        vertical
        height="100px"
        :max="100"
        :min="0"
        size="small"
        :show-tooltip="false"
        v-model="volume"
        @input="setVolumn"
      >
      </el-slider>
    </div>
    <div class="text-sm mt-3"></div>
    <div class="mt-2"></div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../../../store/player";
import { storeToRefs } from "pinia";
import {ref} from "vue"
let { setVolumn } = usePlayerStore();
let { volume } = storeToRefs(usePlayerStore());

let a = ref(false)
</script>

<style lang="scss" scoped>

</style>
