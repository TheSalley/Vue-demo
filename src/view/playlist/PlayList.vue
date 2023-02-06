<template>
  <div class="playlist" v-if="playlist">
    <div class="p-5">
      <Info :playlist="playlist" />
      <SongList :songs="songs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from "./Info.vue";
import SongList from "./SongList.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { requestPlayListDetail, requestPlayListTrackAll } from "../../api";
import type { PlayListDetail } from "../../interface/playlist";
import type { Song } from "../../interface/song";

const playlist = ref<any>();
const songs = ref<Song[]>([]);

const route = useRoute();

const getData = async () => {
  const id: number = Number(route.query.id);
  const res = await requestPlayListDetail(id);
  playlist.value = res;
  const res1 = await requestPlayListTrackAll(id);
  songs.value = res1;
};

onMounted(getData);
</script>

<style lang="scss">
.playlist {
}
</style>
