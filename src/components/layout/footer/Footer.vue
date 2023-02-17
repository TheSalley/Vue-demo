<template>
  <div class="flex flex-col items-stretch h-20 __bg-main1 pt-1">
    <PlayerSlider />
    <div class="flex grow px-5 items-center">
      <div class="flex-1">
        <PlayerSong />
      </div>
      <div class="flex-1">
        <PlayController />
      </div>
      <div class="flex-1">
        <PlayerAction />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerSlider from "./PlayerSlider.vue";
import PlayerSong from "./PlayerSong.vue";
import PlayController from "./PlayerController.vue";
import PlayerAction from "./PlayerAction.vue";
</script>
