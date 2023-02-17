<template>
  <div class="leading-5">
    <template v-if="show">
      <span v-if="isShow">{{ text.substring(0, end) }}...</span>
      <span v-else>{{ text }}...</span>
      <span class="ml-5 text-gray-700 __hover-text" @click="isShow = !isShow">
        [{{ isShow ? "收起" : "详情" }}]
      </span>
    </template>
    <template v-else>{{ text }}</template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  text: string;
  end: number;
}>();

let show = ref(false);
let isShow = ref(true);

if (props.text && props.text.length > props.end) {
  show.value = true;
}
</script>
