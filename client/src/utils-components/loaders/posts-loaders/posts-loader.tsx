import { FC } from "react";
import { renderLoadersList } from "../../../services/component-render-service/render-loaders-list";
import { PostLoader } from "./post-loader/post-loader";

const PostsLoader: FC = () => {
  return <>{renderLoadersList(PostLoader, 5)}</>;
};

export { PostsLoader };
