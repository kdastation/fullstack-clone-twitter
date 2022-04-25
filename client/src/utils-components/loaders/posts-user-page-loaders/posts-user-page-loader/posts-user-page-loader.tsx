import { FC } from "react";
import { renderLoadersList } from "../../../../services/component-render-service/render-loaders-list";
import { PostLoader } from "../../posts-loaders/post-loader/post-loader";
import { HeaderPostsLoaderPageLoader } from "../header-posts-user-page-loader/header-posts-user-page-loader";

const PostsUserPageLoader: FC = () => {
  return (
    <>
      <HeaderPostsLoaderPageLoader />
      {renderLoadersList(PostLoader, 3)}
    </>
  );
};

export { PostsUserPageLoader };
