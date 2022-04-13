import { FC } from "react";
import { useTracksUserQuery } from "../../query/query-hooks.ts/tracks-user-hook";
import { Track } from "./track/track";

const Tracks: FC = () => {
  const { isLoading, tracks, error } = useTracksUserQuery();
  console.log(tracks);
  return (
    <div>
      {tracks &&
        tracks.map((track) => {
          return <Track key={track.id} track={track} />;
        })}
    </div>
  );
};

export { Tracks };
