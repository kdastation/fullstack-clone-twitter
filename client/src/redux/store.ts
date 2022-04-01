import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";

const rootReducer = {
  auth: authReducer.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
