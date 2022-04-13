import { FC } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { IconButton, SxProps, Theme } from "@mui/material";
import { AudioProgress } from "./audio-progress/audio-progress";
import { useAudioPlayer } from "../../hooks/audio-player-hook";
import "./audio-player.scss";

const stylesIconPlay: SxProps<Theme> = {
  fontSize: "60px",
  cursor: "pointer",
  color: "blue",
};

const AudioPlayer: FC = () => {
  const {
    audio,
    activeTrack,
    isPause,
    duration,
    currentTime,
    volume,
    togglePlayPause,
    changeVolume,
    changeCurrentTime,
  } = useAudioPlayer();

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
