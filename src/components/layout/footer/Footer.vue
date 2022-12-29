<script setup lang="ts">
import PlayerSlider from "./PlayerSlider.vue";
</script>

<template>
  <div class="flex flex-col items-stretch h-20">
    <PlayerSlider />
    <div class="flex grow px-5 items-center">
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>
