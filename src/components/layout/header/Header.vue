<script setup lang="ts">
import {
  HamburgerButton,
  Left,
  Mail,
  Platte,
  Right,
  Search,
} from "@icon-park/vue-next";
import IconPark from "../../common/IconPark.vue";
import SearchCom from "./Search.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const iconSize = 22;

const changeThemeMode = () => {
  
}
</script>
<template>
  <div class="flex items-center justify-between h-14">
    <div class="flex items-center pl-5">
      <IconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <IconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
      />
      <div class="search ml-2">
        <SearchCom />
      </div>
    </div>
    <div class="flex items-center mr-5">
      <IconPark :icon="Mail" :stroke-width="2" class="icon-button" />
      <IconPark
        :icon="Platte"
        :stroke-width="2"
        class="icon-button"
        @click="changeThemeMode"
      />
      <IconPark :icon="HamburgerButton" :stroke-width="2" class="icon-button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
</style>
