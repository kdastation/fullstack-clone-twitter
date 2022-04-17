import { FC } from "react";
import { usePostsUserQuery } from "../../query/query-hooks/posts-user-hook";
import { renderPost } from "../../services/component-render-service/render-post";
import { List } from "../../utils-components/list/list";

const PostsUserPage: FC = () => {
  const { isLoading, error, posts, count, isError } = usePostsUserQuery();

  return (
    <div>
      {!isError && (
        <div>
          У вас {count} постов
          {posts && <List items={posts} renderItem={renderPost} />}
        </div>
      )}
    </div>
  );
};

export { PostsUserPage };
