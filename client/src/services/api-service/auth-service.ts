import axios from "axios";
import { ApiURLNames } from "./api-url-names";
import { AuthResponse } from "../../types/response/auth-response";
import { upgradeAxios } from "./main-settings-api";

export class AuthService {
  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await upgradeAxios.post<AuthResponse>(ApiURLNames.LOGIN, {
      email,
      password,
    });
    return response.data;
  }

  static async refreshTokenAndReturnResponse(): Promise<AuthResponse> {
    const response = await axios.get<AuthResponse>(
      ApiURLNames.MAIN_URL + ApiURLNames.REFRESH_TOKEN,
      { withCredentials: true }
    );
    return response.data;
  }
}
