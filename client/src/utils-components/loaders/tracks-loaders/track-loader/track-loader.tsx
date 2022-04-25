import { FC } from "react";
import ContentLoader from "react-content-loader";

const TrackLoader: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={577}
      height={40}
      viewBox="0 0 577 40"
      backgroundColor="#a6bec9"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="4" y="5" rx="0" ry="0" width="608" height="62" />
    </ContentLoader>
  );
};

export { TrackLoader };
