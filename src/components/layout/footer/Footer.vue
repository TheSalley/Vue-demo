<template>
  <div class="flex flex-col items-stretch h-20">
    <PlayerSlider />
    <div class="flex grow px-5 items-center">
      <div class="flex-1"></div>
      <div class="flex-1">
        <PlayController />
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerSlider from "./PlayerSlider.vue";
import PlayController from "./PlayController.vue";
</script>
