import { FC } from "react";
import { useTracksUserQuery } from "../../query/query-hooks/tracks-user-hook";
import { renderTrack } from "../../services/component-render-service/render-track";
import { List } from "../../utils-components/list/list";

const Tracks: FC = () => {
  const { isLoading, tracks, error } = useTracksUserQuery();
  console.log(tracks);
  return (
    <div>{tracks && <List items={tracks} renderItem={renderTrack} />}</div>
  );
};

export { Tracks };
