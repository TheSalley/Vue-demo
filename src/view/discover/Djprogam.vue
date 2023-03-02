<template>
  <Title title="推荐电台" class="mt-5" />
  <div class="grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5">
    <div v-for="item in djprogram" :key="item.id" @click="router.push({
        name: 'video',
        query: {
            id: item.id
        }
    })">
      <CoverPlay :pic-url="item.picUrl" :name="item.name" :play-count="0" />
      <div class="truncate text-xs mt-2 __text-main">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../../components/common/Title.vue";
import CoverPlay from "../../components/common/CoverPlay.vue";
import { usePersonalizedStore } from "../../store/personalized";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { getDjprogram } = usePersonalizedStore();
const { djprogram } = storeToRefs(usePersonalizedStore());

onMounted(async () => {
  await getDjprogram();
});
</script>
