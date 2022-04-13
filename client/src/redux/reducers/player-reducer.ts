import { ITrack } from "./../../types/track-model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStatePlayer {
  activeTrack: null | ITrack;
  isPause: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}

const inititalState: initialStatePlayer = {
  activeTrack: null,
  isPause: true,
  currentTime: 0,
  duration: 0,
  volume: 40,
};

export const playerReducer = createSlice({
  initialState: inititalState,
  name: "player",
  reducers: {
    setActiveTrack(state, action: PayloadAction<ITrack>) {
      state.activeTrack = action.payload;
      state.currentTime = 0;
      state.duration = 0;
    },
    play(state) {
      state.isPause = false;
    },
    pause(state) {
      state.isPause = true;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const {
  pause,
  play,
  setActiveTrack,
  setCurrentTime,
  setDuration,
  setVolume,
} = playerReducer.actions;
