import { Paper } from "@mui/material";
import { FC, memo } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ITrack } from "../../../types/track-model";
import "./track.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  pause,
  play,
  setActiveTrack,
} from "../../../redux/reducers/player-reducer";
import { PlayerSelector } from "../../../redux/selectors/player-selector";

interface TrackProps {
  track: ITrack;
}

const Track: FC<TrackProps> = (props) => {
  const { track } = props;
  const isPause = useSelector(PlayerSelector.getPauseStatus);
  const activeTrack = useSelector(PlayerSelector.getActiveTrack);
  const isActiveTrackThis = activeTrack?.id === track.id;
  const isPlayingActiveTrack = !isPause && isActiveTrackThis;
  const dispatch = useDispatch();

  const runTrack = () => {
    if (isActiveTrackThis) {
      dispatch(play());
    } else {
      dispatch(setActiveTrack(track));
    }
  };

  const stopTrack = () => {
    dispatch(pause());
  };

  return (
    <div className="track_wrapper">
      <Paper elevation={10}>
        <div className="track">
          <div className="track_left">
            <div>
              {isPlayingActiveTrack ? (
                <PauseIcon data-testid="stopTrack" onClick={stopTrack} />
              ) : (
                <PlayArrowIcon data-testid="runTrack" onClick={runTrack} />
              )}
            </div>
            <div className="track__name">{track.name}</div>
          </div>
          <div>
            <MoreHorizIcon />
          </div>
        </div>
      </Paper>
    </div>
  );
};

const MemoTrack = memo(Track);

export { Track, MemoTrack };
