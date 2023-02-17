<template>
  <div class="h-screen flex flex-col __bg-main">
    <img src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000" alt="" class="logo"/>
    <el-scrollbar>
      <div
        class="mt-10 px-6 space-y-1.5"
        v-for="menusItem in menus"
        :key="menusItem.name"
      >
        <div class="menu-title __text-main">{{ menusItem.name }}</div>
        <div
          class="menu-item __text-main __hover-bg-main"
          v-for="item in menusItem.menus"
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

<script setup lang="ts">
import { useMenu } from "./useMenu";
import IconPark from "../../common/IconPark.vue";
const { menus, currentKey, click } = useMenu();
</script>
<style lang="scss" scoped>
.logo {
  @apply mt-4;
}
.menu-title {
  @apply text-xs px-4 pb-2;
}

.menu-item {
  @apply text-sm px-4 py-1.5 rounded cursor-pointer flex items-center transition-colors;
}

.active {
  @apply cursor-default text-slate-50 bg-gradient-to-r from-teal-400 to-emerald-400;
}
</style>
