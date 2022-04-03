import { IUser } from "../../types/user-model";
import { ApiURLNames } from "./api-url-names";
import { upgradeAxios } from "./main-settings-api";

export class UserService {
  static async getUsers() {
    const response = await upgradeAxios.get<IUser[]>(ApiURLNames.USERS);
    return response.data;
  }
}
