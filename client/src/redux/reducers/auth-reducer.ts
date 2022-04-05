import { IUser } from "../../types/user-model";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateAuth {
  isLoading: boolean;
  isAuth: boolean;
  userData: IUser;
}

const inititalState: initialStateAuth = {
  isAuth: false,
  userData: {} as IUser,
  isLoading: true,
};

export const authReducer = createSlice({
  initialState: inititalState,
  name: "auth",
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.userData = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading, setIsAuth } = authReducer.actions;
