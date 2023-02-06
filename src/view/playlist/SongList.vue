<template>
  <div class="mt-2">
    <div class="flex text-xs text-gray-400 py-2">
      <div class="flex-auto">歌曲</div>
      <div class="w-1/4">歌手</div>
      <div class="w-1/4">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div class="text-sm">
      <template v-for="song in songs.slice(0, pageSize * page)" :key="song.id">
        <SongListItem :song="song" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Song } from "../../interface/song";
import SongListItem from "./SongListItem.vue";
const pageSize = ref(10);
const page = ref(1);

const props = defineProps<{
  songs: Song[];
}>();
</script>
