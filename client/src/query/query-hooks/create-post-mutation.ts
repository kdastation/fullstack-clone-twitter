import { useMutation, useQueryClient } from "react-query";
import { PostApiService } from "../../services/api-service/post-api-service";
import { IPost } from "../../types/post/post";

export const useCreatePostQuery = (
  callbackOnSuccess: null | (() => void) = null,
  callbackOnError: null | (() => void) = null
) => {
  const queryClient = useQueryClient();

  const { error, isError, mutateAsync } = useMutation(
    PostApiService.createPost,
    {
      onSuccess: (newPost) => {
        queryClient.setQueryData<IPost[]>("posts", (oldPosts) => {
          if (callbackOnSuccess) {
            callbackOnSuccess();
          }
          return oldPosts ? [...oldPosts, newPost] : [newPost];
        });
      },
    }
  );

  return {
    mutateAsync,
    error,
    isError,
  };
};
