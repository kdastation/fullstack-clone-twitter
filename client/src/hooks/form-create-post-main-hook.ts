import { useForm } from "react-hook-form";
import { useCreatePostQuery } from "../query/query-hooks.ts/create-post-mutation";
import { useContentFieldFormCreatePost } from "./content-field-form-create-post-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsCreatePostForm } from "../validators/validators-create-post-form";
import { useToggle } from "./toggle-hook";
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

  const { handleToggle: handleVisibleEmoji, toggleStatus: iSVisibleEmoji } =
    useToggle();

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

  const setEmoji = (
    emoji: any,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setValue("content", content + emoji.native);
  };
  return {
    formState,
    isWordLimitExceeded,
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    errorsSumbit,
    removeImg,
    setEmoji,
    createPostSumbit,
    handleSubmit,
    register,
    isErrorSumbit,
    preview,
    iSVisibleEmoji,
    handleVisibleEmoji,
  };
};
