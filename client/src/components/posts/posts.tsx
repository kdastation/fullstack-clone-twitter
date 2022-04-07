import { FC } from "react";
import { useQuery } from "react-query";
import { PostApiService } from "../../services/api-service/post-api-service";
import { MemoPost } from "../post/post";

const Posts: FC = () => {
  const {
    isLoading,
    data: posts,
    isError,
  } = useQuery("posts", PostApiService.getAllPosts);
  console.log(posts, isLoading, isError);
  return (
    <div>
      {!isLoading &&
        posts &&
        posts.map((post) => {
          return (
            <MemoPost key={`${post.id}_${post.content}`} postData={post} />
          );
        })}
    </div>
  );
};

export { Posts };
