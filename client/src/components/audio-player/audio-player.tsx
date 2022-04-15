import { FC } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { SxProps, Theme } from "@mui/material";
import { AudioProgress } from "./audio-progress/audio-progress";
import { useAudioPlayer } from "../../hooks/audio-player-hook";
import "./audio-player.scss";

const stylesIconPlay: SxProps<Theme> = {
  fontSize: "30px",
  cursor: "pointer",
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
        <div className="audio_player_controls_play">
          <div onClick={togglePlayPause}>
            {isPause ? (
              <PlayCircleIcon color="primary" sx={stylesIconPlay} />
            ) : (
              <PauseCircleFilledIcon color="primary" sx={stylesIconPlay} />
            )}
          </div>
          <div className="audio_player_controls_play__track_name">
            {activeTrack.name}
          </div>
        </div>
        <div className="audio_player_controls__time">
          <AudioProgress
            type="time"
            left={currentTime}
            right={duration}
            onChange={changeCurrentTime}
          />
        </div>

        <div className="audio_player_controls__volume">
          <AudioProgress
            type="volume"
            left={volume}
            right={100}
            onChange={changeVolume}
          />
        </div>
      </div>
    </div>
  );
};

export { AudioPlayer };
