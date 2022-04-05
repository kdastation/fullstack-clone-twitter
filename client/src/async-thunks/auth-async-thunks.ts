import { IUser } from "./../types/user-model";
import {
  removeTokenInLocalStorage,
  setTokenInLocalStorage,
} from "./../utils/utils";
import { AuthService } from "../services/api-service/auth-service";
import { appDispatch } from "./../redux/store";
import { setIsAuth, setLoading, setUser } from "../redux/reducers/auth-reducer";

export const loginUser =
  (email: string, password: string) => async (dispatch: appDispatch) => {
    try {
      const authResponse = await AuthService.login(email, password);
      dispatch(setUser(authResponse.user));
      dispatch(setIsAuth(true));
      setTokenInLocalStorage(authResponse.tokens.accessToken);
    } catch (error: any) {
      throw error.response?.data || error;
    }
  };

export const registrationUser =
  (email: string, password: string) => async (dispatch: appDispatch) => {
    try {
      const authResponse = await AuthService.registration(email, password);
      dispatch(setUser(authResponse.user));
      dispatch(setIsAuth(true));
      setTokenInLocalStorage(authResponse.tokens.accessToken);
    } catch (error: any) {
      console.log(error, error.response?.data);
      throw error.response?.data || error;
    }
  };

export const checkAuth = () => async (dispatch: appDispatch) => {
  dispatch(setLoading(true));
  try {
    const authResponse = await AuthService.refreshTokenAndReturnResponse();
    dispatch(setUser(authResponse.user));
    dispatch(setIsAuth(true));
    setTokenInLocalStorage(authResponse.tokens.accessToken);
  } catch (error: any) {
    console.log(error, error.response?.data);
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch: appDispatch) => {
  try {
    await AuthService.logout();
    dispatch(setIsAuth(false));
    dispatch(setUser({} as IUser));
    removeTokenInLocalStorage();
  } catch (error: any) {
    console.log(error, error.response?.data);
  }
};
