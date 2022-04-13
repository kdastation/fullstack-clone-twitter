import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pause,
  play,
  setCurrentTime,
  setDuration,
  setVolume,
} from "../redux/reducers/player-reducer";
import { PlayerSelector } from "../redux/selectors/player-selector";
import { ApiURLNames } from "../services/api-service/api-url-names";

export const useAudioPlayer = () => {
  const dispatch = useDispatch();
  const audio = useRef<HTMLAudioElement | null>(null);
  const { activeTrack, currentTime, duration, isPause, volume } = useSelector(
    PlayerSelector.getAllState
  );

  useEffect(() => {
    if (audio && activeTrack) {
      setAudio();
      playTrack();
    }
  }, [activeTrack]);

  useEffect(() => {
    if (activeTrack && audio.current) {
      isPause ? audio.current.pause() : audio.current.play();
    }
  }, [isPause]);

  const playTrack = () => {
    dispatch(play());
    audio.current!.play();
  };

  const pauseTrack = () => {
    dispatch(pause());
    audio.current!.pause();
  };

  const setAudio = () => {
    if (activeTrack && audio.current) {
      audio.current.src = ApiURLNames.URL_AUDIO + activeTrack.audio;
      audio.current.volume = volume / 100;
      audio.current.onloadeddata = () => {
        dispatch(setDuration(Math.ceil(audio.current!.duration)));
      };
      audio.current.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.current!.currentTime)));
      };
    }
  };

  const togglePlayPause = () => {
    if (audio.current) {
      isPause ? playTrack() : pauseTrack();
    }
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) {
      audio.current.currentTime = Number(e.target.value);
      dispatch(setCurrentTime(Number(e.target.value)));
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) {
      audio.current.volume = Number(e.target.value) / 100;
      dispatch(setVolume(Number(e.target.value)));
    }
  };

  return {
    audio,
    activeTrack,
    isPause,
    volume,
    duration,
    currentTime,
    changeVolume,
    changeCurrentTime,
    togglePlayPause,
  };
};
