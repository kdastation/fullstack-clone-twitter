import { FC } from "react";
import { usePostsQuery } from "../../query/query-hooks/posts-hook";
import { renderPost } from "../../services/component-render-service/render-post";
import { List } from "../../utils-components/list/list";
import { PostsLoader } from "../../utils-components/loaders/posts-loaders/posts-loader";
import { WrapperLoaderError } from "../../utils-components/wrapper-loader-error/wrapper-loader-error";

const Posts: FC = () => {
  const { posts, isLoading, isError } = usePostsQuery();
  const isHasData = posts && posts.length > 0;
  return (
    <div>
      <WrapperLoaderError
        isError={isError}
        isLoading={isLoading}
        Loader={PostsLoader}
      >
        {isHasData && <List items={posts} renderItem={renderPost} />}
      </WrapperLoaderError>
    </div>
  );
};

export { Posts };
