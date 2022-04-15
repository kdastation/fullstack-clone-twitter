import { PostApiService } from "../../services/api-service/post-api-service";
import { useQuery } from "react-query";
export const usePostsUserQuery = () => {
  const { isLoading, data, error, isError } = useQuery(
    "posts-user",
    PostApiService.getPostsUser,
    {
      retry: 0,
    }
  );
  return {
    isLoading,
    count: data?.count,
    posts: data?.posts,
    error,
    isError,
  };
};
