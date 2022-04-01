import { getTokenFromLocalStorage } from "./../../utils/utils";
import { ApiURLNames } from "./api-url-names";
import axios from "axios";

const upgradeAxios = axios.create({
  baseURL: ApiURLNames.MAIN_URL,
  withCredentials: true,
});

upgradeAxios.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${getTokenFromLocalStorage()}`;
  return config;
});

export { upgradeAxios };
