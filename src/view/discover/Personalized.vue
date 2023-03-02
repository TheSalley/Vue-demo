<template>
  <div>
    <Title title="你的专属歌单" />
    <div
      class="grid grid-flow-row grid-cols-3 gap-5 lg:grid-cols-5 2xl:grid-cols-10"
    >
      <div
        class=""
        v-for="(item, index) in sampleSize(personalized, 10)"
        :key="index"
        @click="router.push({ name: 'playlist', query: { id: item.id } })"
      >
        <CoverPlay
          :name="item.name"
          :pic-url="item.picUrl"
          show-play-count
          :play-count="item.playCount"
        />
        <div class="mt-2 text-xs truncate __text-main">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { sampleSize } from "lodash";
import Title from "../../components/common/Title.vue";
import CoverPlay from "../../components/common/CoverPlay.vue";
import { useMusicStore } from "../../store/music";

const { personalized } = storeToRefs(useMusicStore());
const { getPersonalized } = useMusicStore();
const router = useRouter();

onMounted(() => {
  getPersonalized();
});
</script>
