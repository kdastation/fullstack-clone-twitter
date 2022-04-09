import { useQuery } from "react-query";
import { PostApiService } from "../../services/api-service/post-api-service";

export const usePostsQuery = () => {
  const {
    isLoading,
    data: posts,
    isError,
  } = useQuery(["posts"], PostApiService.getAllPosts, {
    retry: 0,
  });
  return {
    posts,
    isLoading,
    isError,
  };
};
