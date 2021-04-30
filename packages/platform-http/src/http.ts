import axios, { AxiosRequestConfig } from "axios";

export const createCustomAxiosInstance = (config: AxiosRequestConfig) => {
  const DEFAULT_CONFIG = {
    baseURL: "/api/",
    timeout: 10000,
    headers: { "X-Custom-Header": "foobar" },
  };
  return axios.create({ ...DEFAULT_CONFIG, ...config });
};

export const $siteWeb = createCustomAxiosInstance({
  baseURL: "/api/site-web",
});
