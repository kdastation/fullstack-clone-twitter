import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth-reducer";
import { playerReducer } from "./reducers/player-reducer";

const rootReducer = {
  auth: authReducer.reducer,
  [playerReducer.name]: playerReducer.reducer,
};

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export const store = createReduxStore();

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
