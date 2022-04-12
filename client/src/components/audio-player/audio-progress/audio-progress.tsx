import { FC } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./audio-progress.scss";

interface AudioProgressProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "volume" | "time";
}

const AudioProgress: FC<AudioProgressProps> = (props) => {
  const { left, right, onChange, type } = props;
  return (
    <div className="audio_progress">
      <div className="audio_progress__range_wrapper">
        {type === "volume" ? <VolumeUpIcon /> : <AccessTimeIcon />}
        <input
          type="range"
          min={0}
          max={right}
          value={left}
          onChange={onChange}
        />
      </div>
      <div className="audio_progress__values">
        {left}/{right}
      </div>
    </div>
  );
};
export { AudioProgress };
