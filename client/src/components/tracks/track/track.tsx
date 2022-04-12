import { Paper } from "@mui/material";
import { FC } from "react";
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

//TODO: Доделать

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
      <Paper>
        <div className="track">
          <div className="track_left">
            <div>
              {isPlayingActiveTrack ? (
                <PauseIcon onClick={stopTrack} />
              ) : (
                <PlayArrowIcon onClick={runTrack} />
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

export { Track };
