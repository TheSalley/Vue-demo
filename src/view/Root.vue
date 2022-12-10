<script setup lang="ts">
import Menu from "../components/layout/menu/Menu.vue";
</script>
<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <div class="flex flex-1 flex-col">
      <div class="h-14"></div>
      <div class="flex-1 overflow-hidden">
        <div class="container mx-auto">
          <RouterView/>
        </div>
      </div>
      <div class="h-20"></div>
    </div>
  </div>
</template>
