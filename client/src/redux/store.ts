import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";
import { playerReducer } from "./reducers/player-reducer";

const rootReducer = {
  auth: authReducer.reducer,
  [playerReducer.name]: playerReducer.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
