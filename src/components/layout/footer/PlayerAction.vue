<template>
  <div class="flex justify-end items-center gap-x-2.5">
    <span class="text-xs"></span>
    <IconPark
      :icon="TextMessage"
      size="18"
      :stroke-width="3"
      class="__hover-text"
      title="歌词"
    />
    <div class="flex items-center __hover-text">
        <IconPark :icon="AlignTextBoth" size="18" :stroke-width="3" class="__hover-text" title="播放列表"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { TextMessage, AlignTextBoth } from "@icon-park/vue-next";
</script>
