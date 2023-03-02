<template>
  <Title title="独家放送" class="mt-5" />
  <div class="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-5">
    <div v-for="item in personalizedPrivateContent" :key="item.id">
        <CoverPlay :pic-url="item.sPicUrl" video :name="item.name"/>
        <div class="truncate text-xs mt-2 __text-main">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../../../components/common/Title.vue";
import CoverPlay from "../../../components/common/CoverPlay.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useVideoStore } from "../../../store/video";
import { storeToRefs } from "pinia";

const { getPersonalizedPrivateContent } = useVideoStore();
const { personalizedPrivateContent } = storeToRefs(useVideoStore());

onMounted(async () => {
    await getPersonalizedPrivateContent()
})
</script>
