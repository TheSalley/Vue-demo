import http from "../utils/http";
import { type Banner } from "../interface/banner";
import type { SearchSuggest, SearchHotDetail } from "../interface/search";
import type { Personalized } from "../interface/personalized";

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
 * @name requestPersonalized 个性化推荐
 */
export const requestPersonalized = async () => {
  const { result } = await http.get<{ result: Personalized[] }>(
    "/personalized"
  );
  return result;
};

/**
 * @function
 * @name requestLogin 请求登录
 */
export const requestLogin = async (phone: string, password: string) => {
  return await http.get<{
    code: number;
    cookie: string;
    token: string;
  }>("/login/cellphone", { phone, password });
};
