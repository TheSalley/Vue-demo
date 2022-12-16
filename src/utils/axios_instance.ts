import axios, { type AxiosRequestConfig } from "axios";
import Config from "../config";

const instance = axios.create({
  baseURL: Config.baseUrl,
  timeout: Config.timeout,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.params = {
      ...config.params,
      t: Date.now(),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
