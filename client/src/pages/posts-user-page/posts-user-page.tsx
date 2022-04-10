import { FC } from "react";
import { MemoPost } from "../../components/post/post";
import { usePostsUserQuery } from "../../query/query-hooks.ts/posts-user-hook";

const PostsUserPage: FC = () => {
  const { isLoading, error, posts, count, isError } = usePostsUserQuery();

  return (
    <div>
      {!isError && (
        <div>
          У вас {count} постов
          {posts &&
            posts.map((post) => {
              return <MemoPost key={post.id} postData={post} />;
            })}
        </div>
      )}
    </div>
  );
};

export { PostsUserPage };
