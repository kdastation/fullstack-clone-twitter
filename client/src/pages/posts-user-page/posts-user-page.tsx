import { FC } from "react";
import { AudioPlayer } from "../../components/audio-player/audio-player";
import { MemoPost } from "../../components/post/post";
import { usePostsUserQuery } from "../../query/query-hooks/posts-user-hook";

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
