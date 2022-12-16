import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import type { SearchSuggest, SearchHotDetail } from "../interface/search";
import { requestSearchSuggest, requestSearchHot } from "../api/index";

/**
 * @param {boolean} showSearchView 是否展示搜索结果
 * @param {string} searchKeyword 搜索关键字
 * @param {object} suggestData 搜索建议
 */

export const useSearchStore = defineStore("search", () => {
  let showSearchView = ref<boolean>(false);
  let searchKeyword = ref<string>("");
  let suggestData = ref<SearchSuggest>({} as SearchSuggest);
  let searchHotData = ref<SearchHotDetail[]>([]);

  let showHot = () => {
    return searchKeyword.value == "";
  };

  let suggest = async () => {
    if(!searchKeyword.value) return;
    suggestData.value = await requestSearchSuggest(searchKeyword.value);  
  };

  let getSearchHot = async () => {
    searchHotData.value = await requestSearchHot();
  };

  return {
    showSearchView,
    searchKeyword,
    suggestData,
    searchHotData,
    showHot,
    suggest,
    getSearchHot,
  };
});
