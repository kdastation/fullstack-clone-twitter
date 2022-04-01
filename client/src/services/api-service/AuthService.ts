import { ApiURLNames } from "./api-url-names";
import { AuthResponse } from "../../models/response/auth-response";
import { upgradeAxios } from "./main-settings-api";

export class AuthService {
  static async login(email: string, password: string): Promise<AuthResponse> {
    const response = await upgradeAxios.post<AuthResponse>(ApiURLNames.LOGIN, {
      email,
      password,
    });
    return response.data;
  }
}
