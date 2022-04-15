import { FC } from "react";
import { usePostsQuery } from "../../query/query-hooks/posts-hook";
import { MemoPost } from "../post/post";

const Posts: FC = () => {
  const { posts, isLoading, isError } = usePostsQuery();

  return (
    <div>
      {posts &&
        posts.map((post) => {
          return <MemoPost key={post.id} postData={post} />;
        })}
    </div>
  );
};

export { Posts };
