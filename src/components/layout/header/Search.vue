<script setup lang="ts">
import { onMounted } from "vue";
import { Search } from "@icon-park/vue-next";
import { debounce } from "lodash";
import { storeToRefs } from "pinia";
import { useSearchStore } from "../../../store/search";
import { useNumberFormat } from "../../../utils/format";
import SearchList from "./SearchList.vue";

const { showSearchView, searchKeyword, searchHotData, suggestData } =
  storeToRefs(useSearchStore());
const { suggest, showHot, getSearchHot } = useSearchStore();
const searchInput = debounce(suggest, 500);

onMounted(() => {
  getSearchHot();
});
</script>

<template>
  <el-popover width="250px">
    <template #reference>
      <el-input
        placeholder="搜索音乐、MV、歌单"
        clearable
        :prefix-icon="Search"
        v-model="searchKeyword"
        @input="searchInput"
      ></el-input>
    </template>
    <div class="h-96">
      <el-scrollbar>
        <div class="pb-2.5">
          <div v-if="showHot()">
            <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div
                v-for="(item, index) in searchHotData"
                :key="index"
                class="py-2.5 px-2.5 cursor-pointer flex justify-between items-center text-xs __hover-text"
              >
                <div>
                  <span class="mr-1">{{ index + 1 }}.</span>
                  <span>{{ item.searchWord }}</span>
                </div>
                <div class="text-red-300 text-xs">
                  {{ useNumberFormat(item.score) }}
                </div>
              </div>
            </div>
          </div>
          <div else>
            <SearchList :data="suggestData" />
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-popover>
</template>
