import { FC } from "react";
import { renderLoadersList } from "../../../../services/component-render-service/render-loaders-list";
import { TrackLoader } from "../track-loader/track-loader";

const TracksLoader: FC = () => {
  return <>{renderLoadersList(TrackLoader, 3)}</>;
};

export { TracksLoader };
