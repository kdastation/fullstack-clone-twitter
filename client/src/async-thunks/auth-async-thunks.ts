import { setTokenInLocalStorage } from "./../utils/utils";
import { AuthService } from "./../services/api-service/AuthService";
import { appDispatch } from "./../redux/store";
import { setUser } from "../redux/reducers/auth-reducer";

export const loginUser =
  (email: string, password: string) => async (dispatch: appDispatch) => {
    try {
      const authResponse = await AuthService.login(email, password);
      dispatch(setUser(authResponse.user));
      setTokenInLocalStorage(authResponse.tokens.accessToken);
    } catch (error: any) {
      throw error.response.data;
    }
  };