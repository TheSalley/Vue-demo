<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <!-- 左边菜单区 -->
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <!-- 右边内容展示区 -->
    <div class="flex flex-1 flex-col">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <el-scrollbar>
          <div class="container mx-auto">
            <RouterView />
          </div>
        </el-scrollbar>
      </div>
      <div class="h-20">
        <Footer />
      </div>
    </div>
    <!-- 播放器 -->
    <PlayList />
  </div>
</template>

<script setup lang="ts">
import Menu from "../components/layout/menu/Menu.vue";
import Header from "../components/layout/header/Header.vue";
import Footer from "../components/layout/footer/Footer.vue";
import PlayList from "../components/layout/playList/PlayList.vue";
</script>
