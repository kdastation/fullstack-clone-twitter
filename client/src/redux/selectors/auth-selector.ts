import { IUser } from "../../types/user-model";
import { rootState } from "./../store";

export class AuthSelector {
  static getAuthStatus(state: rootState): boolean {
    return state.auth.isAuth;
  }

  static getUserData(state: rootState): IUser {
    return state.auth.userData;
  }

  static getLoadingStatus(state: rootState): boolean {
    return state.auth.isLoading;
  }
}
