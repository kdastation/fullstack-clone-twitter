import { FC, useEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks/toggle-hook";
import { ApiURLNames } from "../../services/api-service/api-url-names";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { IconButton, SxProps, Theme } from "@mui/material";
import { AudioProgress } from "./audio-progress/audio-progress";
import "./audio-player.scss";

const stylesIconPlay: SxProps<Theme> = {
  fontSize: "60px",
  cursor: "pointer",
  color: "blue",
};

const AudioPlayer: FC = () => {
  const [active, setActive] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const audio = useRef<HTMLAudioElement | null>(null);
  const { toggleStatus: isPause, handleToggle } = useToggle();

  useEffect(() => {
    if (audio) {
      setAudio();
    }
  }, [active]);

  const setAudio = () => {
    if (active && audio.current) {
      audio.current.src = ApiURLNames.URL_AUDIO + "qweqwe.mp3";
      audio.current.volume = 50 / 100;
      audio.current.onloadeddata = () => {
        setDuration(Math.ceil(audio.current!.duration));
      };
      audio.current.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.current!.currentTime));
      };
    }
  };

  const togglePlayPause = () => {
    handleToggle();
    if (audio.current) {
      !isPause ? audio.current.play() : audio.current.pause();
    }
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) {
      audio.current.currentTime = Number(e.target.value);
      setCurrentTime(Number(e.target.value));
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audio.current) {
      audio.current.volume = Number(e.target.value) / 100;
      setVolume(Number(e.target.value));
    }
  };
  return (
    <div className="audio_player_wrapper">
      <div>
        <button onClick={() => setActive(true)}>ACTIVE</button>
      </div>
      <audio ref={audio} hidden></audio>
      <div className="audio_player_controls">
        <div className="audio_player_controls__play">
          <IconButton onClick={togglePlayPause}>
            {isPause ? (
              <PauseCircleFilledIcon sx={stylesIconPlay} />
            ) : (
              <PlayCircleIcon sx={stylesIconPlay} />
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
