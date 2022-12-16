<script setup lang="ts">
import { PeopleUnknown } from "@icon-park/vue-next";
import { type SearchSuggest } from "../../../interface/search";
import { head } from "lodash";

defineProps({
  data: Object,
});

const getTitle = (name: string) => {
  switch (name) {
    case "songs":
      return "单曲";
    case "albums":
      return "专辑";
    case "artists":
      return "歌手";
    case "playlists":
      return "歌单";
    default:
      return name;
  }
};
</script>
<template>
  <div v-if="data" v-for="order in (data as SearchSuggest).order">
    <div class="pt-2 pb-1.5 px-2.5">{{ getTitle(order) }}</div>
    <div
      v-if="order === 'songs'"
      v-for="item in (data as SearchSuggest).songs"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1">- {{ head(item.artists)?.name }}</span>
    </div>
    <div
      v-if="order === 'albums'"
      v-for="item in (data as SearchSuggest).albums"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
    >
      <span class="text-emerald-500">{{ item.name }}</span>
      <span class="pl-1"> - {{ item.artist.name }}</span>
    </div>
    <div
      v-if="order === 'artists'"
      v-for="item in (data as SearchSuggest).artists"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="item.img1v1Url" />
      <span class="text-emerald-500 ml-2">{{ item.name }}</span>
    </div>
    <div
      v-if="order === 'playlists'"
      v-for="item in (data as SearchSuggest).playlists"
      :key="item.id"
      class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
    >
      <el-avatar size="small" :src="item.coverImgUrl" />
      <div class="text-emerald-500 ml-2 truncate flex-1 w-1">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
