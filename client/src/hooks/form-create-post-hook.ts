import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { FormCreatePostFields } from "../components/forms/form-create-post/form-create-post";
import { PostApiService } from "../services/api-service/post-api-service";

export const useFormCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(PostApiService.createPost, {
    onSuccess: (newPost) => {
      queryClient.setQueryData("posts", (oldPostsData: any) => {
        return [...oldPostsData, newPost];
      });
    },
  });
  const { handleSubmit, register, watch } = useForm<FormCreatePostFields>({
    mode: "onBlur",
  });
  const createPostSumbit = async (data: FormCreatePostFields) => {
    const formData = new FormData();
    formData.append("content", data.content);
    mutate(formData);
  };
  const permissibleCountWords = 280;
  const totalCountWordsInContentField = watch("content")?.length || 0;
  const totalCountWordsInContentFieldInPrecent = Math.round(
    (totalCountWordsInContentField / permissibleCountWords) * 100
  );
  const WordLimitExceeded =
    totalCountWordsInContentField > permissibleCountWords;

  return {
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    WordLimitExceeded,
    register,
    handleSubmit,
    createPostSumbit,
  };
};
