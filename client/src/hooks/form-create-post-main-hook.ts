import { useForm } from "react-hook-form";
import { useCreatePostQuery } from "../query/query-hooks/create-post-mutation";
import { useContentFieldFormCreatePost } from "./content-field-form-create-post-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsCreatePostForm } from "../validators/validators-create-post-form";
import { useImageFiles } from "./image-files-hook";
export interface FormCreatePostFields {
  content: string;
  imgFile: FileList | undefined;
}

export const useFormCreatPostMain = () => {
  const { handleSubmit, register, watch, setValue, reset, formState } =
    useForm<FormCreatePostFields>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: {
        content: "",
      },
      resolver: yupResolver(validatorsCreatePostForm),
    });

  const submitSuccess = () => {
    reset();
    clearImage();
    alert("Ваш пост создан!");
  };

  const imgFile = watch("imgFile");
  const content = watch("content");

  const {
    mutateAsync,
    error: errorsSumbit,
    isError: isErrorSumbit,
  } = useCreatePostQuery(submitSuccess);
  const { preview, clearImage } = useImageFiles(imgFile);

  const {
    isWordLimitExceeded,
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
  } = useContentFieldFormCreatePost(content);

  const createPostSumbit = async (data: FormCreatePostFields) => {
    const formData = new FormData();
    formData.append("content", data.content);
    if (data.imgFile && data.imgFile.length) {
      formData.append("img", data.imgFile[0]);
    }
    await mutateAsync(formData);
  };

  const removeImg = () => {
    setValue("imgFile", undefined, {
      shouldValidate: true,
    });
    clearImage();
  };
  return {
    formState,
    isWordLimitExceeded,
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    errorsSumbit,
    isErrorSumbit,
    preview,
    removeImg,
    createPostSumbit,
    handleSubmit,
    register,
  };
};
