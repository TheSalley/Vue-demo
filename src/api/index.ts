import http from "../utils/http";
import { type Banner } from "../interface/banner";
import type { SearchSuggest, SearchHotDetail } from "../interface/search";
import type { Personalized } from "../interface/personalized"

/**
 * @function requestBanner 请求Banner 数据
 */
export const requestBanner = async () => {
  const { banners } = await http.get<{ banners: Banner[] }>("/banner", {
    type: 0,
  });
  return banners;
};

/**
 * @function
 * @name requestSearchSuggest 请求搜索结果
 */
export const requestSearchSuggest = async (keywords: string) => {
  const { result } = await http.get<{ result: SearchSuggest }>(
    "/search/suggest",
    {
      keywords,
    }
  );
  return result;
};

/**
 * @function
 * @name requestSearchHot 热门搜索
 */
export const requestSearchHot = async () => {
  const { data } = await http.get<{ data: SearchHotDetail[] }>(
    "/search/hot/detail"
  );
  return data;
};


/**
 * @function
 * @name Personalized 个性化推荐
 */
export const requestPersonalized = async () => {
  const { result } = await http.get<{ result: Personalized[] }>(
    "/personalized"
  );
  return result;
};


