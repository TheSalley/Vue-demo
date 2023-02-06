<template>
  <div class="text-xl pb-5 font-bold">官方榜</div>
  <div class="grid grid-flow-row grid-cols-2 2xl:grid-cols-4 gap-5">
    <div
      v-for="item in topListDetailData.slice(0, 4)"
      :key="item.id"
      class="flex cursor-pointer"
      @click="toPlayList(item)"
    >
      <CoverPlay
        :pic-url="item.coverImgUrl"
        :name="item.name"
        :play-count="item.playCount"
        class="w-36 flex-shrink-0"
        show-play-count
      />
      <div class="px-5 flex-1 flex-shrink-0 flex flex-col">
        <div class="text-xl font-bold">{{ item.name }}</div>
        <div class="text-xs text-main mt-2">
          <div v-for="(track, index) in item.tracks" class="mt-2">
            <div class="flex">
              <span class="mr-1">{{ index + 1 }}</span>
              <div class="flex-auto w-20 truncate">
                {{ track.first }} - {{ track.second }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-xl py-5 font-bold">特色榜</div>
  <div class="grid"></div>
</template>

<script setup lang="ts">
import { useMusicStore } from "../../../store/music";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import CoverPlay from "../../../components/common/CoverPlay.vue";
import router from "../../../router";
import type { TopListDetail } from "../../../interface/toplist_detail";

const { getTopListDetailData } = useMusicStore();
const { topListDetailData } = storeToRefs(useMusicStore());

onMounted(async () => {
  await getTopListDetailData();
});

const toPlayList = (topListDetail: TopListDetail) => {
  router.push({
    name: "playlist",
    query: {
      id: topListDetail.id,
    },
  });
};
</script>
