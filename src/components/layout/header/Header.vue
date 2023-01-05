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
let mode = ref(true);
const router = useRouter();

const changeThemeMode = () => {
  window.document.documentElement.setAttribute(
    "class",
    mode.value ? "dark" : "light"
  );
  mode.value = !mode.value;
};
</script>
<template>
  <div class="flex items-center justify-between h-14">
    <div class="flex items-center pl-5">
      <IconPark
        :icon="Left"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="router.back()"
      />
      <IconPark
        :icon="Right"
        :size="iconSize"
        :stroke-width="2"
        class="icon-button"
        @click="router.go(1)"
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
.search {
  @apply text-xs;
  ::v-deep .el-input__wrapper {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
</style>
