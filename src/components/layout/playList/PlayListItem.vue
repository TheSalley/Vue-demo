<template>
  <div class="flex p-2.5">
    <el-image />
    <div class="ml-2 text-xs flex w-1 h-10">
      <div class="flex-1 flex flex-col justify-between truncate"></div>
      <div class="flex justify-end items-center ml-5"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from "../../../interface/song";
import IconPark from "../../common/IconPark.vue";
import { Youtube } from "@icon-park/vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
  song: Song;
  active?: boolean;
}>();
</script>
