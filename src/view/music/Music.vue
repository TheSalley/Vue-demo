<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">音乐馆</h1>
    <el-affix>
      <div class="bg-view">
        <el-tabs v-model="currentMenu" @tab-click="onTabClick">
          <el-tab-pane
            v-for="menu in menus"
            :key="menu.name"
            :label="menu.label"
            :name="menu.name"
            class="__text-main"
          ></el-tab-pane>
        </el-tabs>
      </div>
    </el-affix>
    <div class="mt-5">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMusicMenu } from "./MusicController";
const { menus, currentMenu, onTabClick } = useMusicMenu();
</script>
