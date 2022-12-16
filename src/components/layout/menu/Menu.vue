<script setup lang="ts">
import { useMenu } from "./useMenu";
import IconPark from "../../common/IconPark.vue";
const { menus, currentKey, click } = useMenu();
</script>
<template>
  <div class="bg-main bg-opacity-70 h-screen flex flex-col">
    <el-scrollbar>
      <div
        class="mt-10 pl-6 pr-6 space-y-1.5"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <div class="menu-title text-main">{{ menu.name }}</div>
        <div
          class="menu-item text-main hover-bg-main"
          v-for="item in menu.menus"
          :key="item.key"
          :class="{ active: item.key === currentKey }"
          @click="click(item)"
        >
          <IconPark :icon="item.icon" size="18" :theme="item.theme" />
          <span class="ml-1">{{ item.name }}</span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 cursor-pointer flex;
}
.active {
  @apply cursor-default;
}
</style>
