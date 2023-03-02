<template>
  <Title title="推荐新音乐" />
  <div
    class="grid grid-flow-row grid-cols-2 2xl:grid-cols-5 gap-y-2.5 gap-x-5 cursor-pointer"
  >
    <div
      v-for="(item, index) in personalizedNewSong"
      :key="index"
      class="flex items-center transition-all __hover-bg-main1"
      @click="play(item.id)"
    >
      <img
        :src="item.picUrl"
        alt=""
        class="w-12 h-12 object-cover rounded flex-shrink-0"
      />
      <div class="px-2 text-xs flex-auto flex flex-col w-1/3 __text-main1">
        <div class="text-xs flex-1 truncate">
          {{ item.name }}
        </div>
        <div class="mt-1.5">
          {{ item.song.artists[0].name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import Title from "../../components/common/Title.vue";
import { useMusicStore } from "../../store/music";
import { usePlayerStore } from "../../store/player";

const { personalizedNewSong } = storeToRefs(useMusicStore());
const { getPersonalizedNewSong } = useMusicStore();

const { play } = usePlayerStore();

onMounted(async () => {
  await getPersonalizedNewSong();
});
</script>
