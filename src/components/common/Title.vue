<template>
  <div class="text-xl py-3 mt-2 flex items-center __text-main">
    <div>{{ title }}</div>
    <IconPark :icon="Right" size="25" :stroke-width="2" />
  </div>
</template>
<script setup lang="ts">
import { Right } from "@icon-park/vue-next";
import IconPark from "./IconPark.vue";

defineProps<{
  title: string;
}>();
</script>
