<template>
  <Title title="推荐MV" class="mt-5" />
  <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="item in personalizedMv" :key="item.id">
      <CoverPlay
        :pic-url="item.picUrl"
        video
        :name="item.name"
        :play-count="item.playCount"
        show-play-count
      />
      <div class="truncate text-xs mt-2 __text-main">{{ item.name }}</div>
      <div class="truncate text-xs mt-1.5 text-slate-400">
        <small>{{ item.artistName }}</small>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import CoverPlay from "../../components/common/CoverPlay.vue";
import { useRouter } from "vue-router";
import { useVideoStore } from "../../store/video";
import { storeToRefs } from "pinia";

const { personalizedMv } = storeToRefs(useVideoStore());
const { getPersonalizedMv } = useVideoStore();

onMounted(async () => {
  await getPersonalizedMv();
});
</script>
