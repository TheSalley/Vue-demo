<template>
  <div class="playlist">
    <div class="p-5">
      <Info :playlist="playlist" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Info from "./Info.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { requestPlayListDetail } from "../../api";
import type { PlayListDetail } from "../../interface/playlist";

const playlist = ref<any>();
const route = useRoute();
const getData = async () => {
  const id: number = Number(route.query.id);
  const res = await requestPlayListDetail(id);
  playlist.value = res;
};

onMounted(getData);
</script>

<style lang="scss">
.playlist {
}
</style>
