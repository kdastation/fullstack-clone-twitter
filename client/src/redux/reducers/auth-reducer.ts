import { IUser } from "./../../models/user-model";
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
  isLoading: false,
};

export const authReducer = createSlice({
  initialState: inititalState,
  name: "auth",
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.userData = action.payload;
      state.isAuth = true;
    },
  },
});

export const { setUser } = authReducer.actions;
