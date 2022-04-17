import { MemoTrack } from "../../components/tracks/track/track";
import { ITrack } from "../../types/track-model";

export const renderTrack = (track: ITrack) => {
  return <MemoTrack track={track} key={track.id} />;
};
