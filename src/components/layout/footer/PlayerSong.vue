<template>
  <div class="flex player-song">
    <img
      :src="song?.al?.picUrl || OpticalDisk"
      alt=""
      class="w-11 h-11 rounded"
    />
    <div class="flex flex-col justify-between ml-2 text-xs">
      <div class="w-52 2xl:w-96 cursor-pointer truncate">
        <div class="flex">
          <div></div>
          <span>{{ song.name ?? "开源云音乐" }}</span>
        </div>
      </div>
      <div class="flex gap-x-3 __text-main">
        <IconPark
          :icon="Like"
          size="18"
          :stroke-width="3"
          class="text-slate-400 __hover-text"
        />
        <IconPark
          :icon="DownTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 __hover-text"
        />
        <IconPark
          :icon="MoreTwo"
          size="18"
          :stroke-width="3"
          class="text-slate-400 __hover-text"
        />
        <el-badge :value="1000" :max="999" class="badge">
          <IconPark
            :icon="Comment"
            size="18"
            :stroke-width="3"
            class="text-slate-400 __hover-text"
          />
        </el-badge>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePlayerStore } from "../../../store/player";
import { storeToRefs } from "pinia";
import { OpticalDisk } from "../../../assets/img";
import { Like, DownTwo, MoreTwo, Comment } from "@icon-park/vue-next";
import { value } from "dom7";

const { song, songUrl } = storeToRefs(usePlayerStore());
</script>
