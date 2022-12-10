import http from "../utils/http";
import { type Banner } from "../interface/banner";

/* 请求Banner 数据 */
export const requestBanner = async () => {
  const { banners } = await http.get<{ banners: Banner[] }>("/banner", {
    type: 0,
  });
  return banners;
};
