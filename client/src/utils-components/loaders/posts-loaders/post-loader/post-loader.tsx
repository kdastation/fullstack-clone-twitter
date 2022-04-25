import { FC } from "react";
import ContentLoader from "react-content-loader";

const PostLoader: FC = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={566}
      height={109}
      viewBox="0 0 566 109"
      backgroundColor="#a6bec9"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="35" cy="37" r="20" />
      <rect x="65" y="19" rx="0" ry="0" width="175" height="16" />
      <rect x="65" y="39" rx="0" ry="0" width="489" height="26" />
      <rect x="72" y="74" rx="0" ry="0" width="45" height="32" />
      <rect x="213" y="76" rx="0" ry="0" width="42" height="30" />
      <rect x="489" y="77" rx="0" ry="0" width="37" height="27" />
      <rect x="347" y="74" rx="0" ry="0" width="40" height="32" />
    </ContentLoader>
  );
};

export { PostLoader };
