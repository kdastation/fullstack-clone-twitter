import { PostsUserResponse } from "./../../types/response/posts-user-response";
import { useMutation, useQueryClient } from "react-query";
import { PostApiService } from "../../services/api-service/post-api-service";
import { IPost } from "../../types/post/post";

export const useCreatePostQuery = (
  callbackOnSuccess: null | (() => void) = null,
  callbackOnError: null | (() => void) = null
) => {
  const queryClient = useQueryClient();

  const { mutate, error, isError } = useMutation(PostApiService.createPost, {
    onSuccess: (newPost) => {
      queryClient.setQueryData<IPost[]>("posts", (oldPosts) => {
        if (callbackOnSuccess) {
          callbackOnSuccess();
        }
        return oldPosts ? [...oldPosts, newPost] : [newPost];
      });
      const postsUser =
        queryClient.getQueryData<PostsUserResponse>("posts-user");
      if (postsUser) {
        _updatePostsForPagePostsUser(newPost, postsUser);
      }
    },
  });

  const _updatePostsForPagePostsUser = (
    newPost: IPost,
    oldData: PostsUserResponse
  ) => {
    let updatePostsUser: PostsUserResponse;
    if (oldData.count === 0) {
      updatePostsUser = {
        count: 1,
        posts: [newPost],
      };
    } else {
      updatePostsUser = {
        count: oldData.count + 1,
        posts: [...oldData.posts, newPost],
      };
    }
    queryClient.setQueryData<PostsUserResponse>("posts-user", updatePostsUser);
  };
  return {
    mutate,
    error,
    isError,
  };
};
