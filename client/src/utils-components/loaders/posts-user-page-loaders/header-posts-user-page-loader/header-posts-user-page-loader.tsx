import { FC } from "react";
import ContentLoader from "react-content-loader";

const HeaderPostsLoaderPageLoader: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={577}
      height={42}
      viewBox="0 0 577 42"
      backgroundColor="#a6bec9"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="9" y="12" rx="0" ry="0" width="119" height="27" />
      <rect x="459" y="11" rx="0" ry="0" width="134" height="24" />
    </ContentLoader>
  );
};

export { HeaderPostsLoaderPageLoader };
