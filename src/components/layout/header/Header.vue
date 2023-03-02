<template>
  <div class="flex items-center justify-between h-14 __bg-main">
    <div class="flex items-center pl-5 __text-main">
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
    <div class="flex items-center mr-5 __text-main">
      <UserInfo />
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
<script setup lang="ts">
/**
 * @param {number} iconSize 图标尺寸
 * @param {boolean} mode 主题色（浅还是暗）
 * @function changeThemeMode 切换主题色
 */
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
import UserInfo from "./UserInfo.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

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

onMounted(() => window.document.documentElement.setAttribute("class", "light"));
</script>
<style lang="scss" scoped>
.search {
  @apply text-xs;
  :deep(.el-input__wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}
.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
</style>
