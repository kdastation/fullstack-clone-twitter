import { FC } from "react";
import { useTracksUserQuery } from "../../query/query-hooks/tracks-user-hook";
import { renderTrack } from "../../services/component-render-service/render-track";
import { List } from "../../utils-components/list/list";
import { TracksLoader } from "../../utils-components/loaders/tracks-loaders/tracks-loader/tracks-loader";
import { WrapperLoaderError } from "../../utils-components/wrapper-loader-error/wrapper-loader-error";

const Tracks: FC = () => {
  const { isLoading, tracks, isError } = useTracksUserQuery();
  const isHasData = tracks && tracks.length > 0;
  return (
    <div>
      <WrapperLoaderError
        isLoading={isLoading}
        isError={isError}
        Loader={TracksLoader}
      >
        {isHasData && <List items={tracks} renderItem={renderTrack} />}
      </WrapperLoaderError>
    </div>
  );
};

export { Tracks };
