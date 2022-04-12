import { FC, useEffect, useRef, useState } from "react";
import { ApiURLNames } from "../../services/api-service/api-url-names";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { IconButton, SxProps, Theme } from "@mui/material";
import { AudioProgress } from "./audio-progress/audio-progress";
import "./audio-player.scss";
import { useDispatch, useSelector } from "react-redux";
import { PlayerSelector } from "../../redux/selectors/player-selector";
import {
  pause,
  play,
  setCurrentTime,
  setDuration,
} from "../../redux/reducers/player-reducer";

const stylesIconPlay: SxProps<Theme> = {
  fontSize: "60px",
  cursor: "pointer",
  color: "blue",
};

const AudioPlayer: FC = () => {
  const dispatch = useDispatch();
  const audio = useRef<HTMLAudioElement | null>(null);
  const activeTrack = useSelector(PlayerSelector.getActiveTrack);
  const isPause = useSelector(PlayerSelector.getPauseStatus);
  const duration = useSelector(PlayerSelector.getDuration);
  const currentTime = useSelector(PlayerSelector.getCurrentTime);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (activeTrack && audio.current) {
      isPause ? audio.current.pause() : audio.current.play();
    }
  }, [isPause]);

  useEffect(() => {
    if (audio && activeTrack) {
      setAudio();
      playTrack();
    }
  }, [activeTrack]);

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
      audio.current.volume = 50 / 100;
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
      setVolume(Number(e.target.value));
    }
  };

  if (!activeTrack) {
    return null;
  }

  return (
    <div className="audio_player_wrapper">
      <audio ref={audio} hidden></audio>
      <div className="audio_player_controls">
        <div className="audio_player_controls__play">
          <IconButton onClick={togglePlayPause}>
            {isPause ? (
              <PlayCircleIcon sx={stylesIconPlay} />
            ) : (
              <PauseCircleFilledIcon sx={stylesIconPlay} />
            )}
          </IconButton>
        </div>
        <div className="audio_player_controls__volume">
          <AudioProgress
            type="volume"
            left={volume}
            right={100}
            onChange={changeVolume}
          />
        </div>
        <div className="audio_player_controls__time">
          <AudioProgress
            type="time"
            left={currentTime}
            right={duration}
            onChange={changeCurrentTime}
          />
        </div>
      </div>
    </div>
  );
};

export { AudioPlayer };
