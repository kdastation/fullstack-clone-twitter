import { AuthService } from "./auth-service";
import {
  getTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "./../../utils/utils";
import { ApiURLNames } from "./api-url-names";
import axios from "axios";

const upgradeAxios = axios.create({
  baseURL: ApiURLNames.MAIN_URL,
  withCredentials: true,
});

upgradeAxios.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  const string = `Bearer ${token}`;
  console.log(token, string);
  config.headers!.Authorization = string;
  return config;
});

upgradeAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const authResponse = await AuthService.refreshTokenAndReturnResponse();
        setTokenInLocalStorage(authResponse.tokens.accessToken);
        return upgradeAxios.request(originalRequest);
      } catch (error: any) {
        console.log(error, error?.response);
      }
    }
    throw error;
  }
);

export { upgradeAxios };
