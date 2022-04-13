import { rootState } from "./../store";
export class PlayerSelector {
  static getPauseStatus(state: rootState) {
    return state.player.isPause;
  }
  static getActiveTrack(state: rootState) {
    return state.player.activeTrack;
  }
  static getDuration(state: rootState) {
    return state.player.duration;
  }
  static getCurrentTime(state: rootState) {
    return state.player.currentTime;
  }
  static getVolume(state: rootState) {
    return state.player.volume;
  }
  static getAllState(state: rootState) {
    return state.player;
  }
}
