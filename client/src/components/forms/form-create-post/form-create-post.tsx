import { FC } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ImageIcon from "@mui/icons-material/Image";
import { ButtonBlue } from "../../../styled-components/btn-blue";
import CircularProgress from "@mui/material/CircularProgress";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreatePostQuery } from "../../../query/query-hooks.ts/create-post-mutation";
import { useForm } from "react-hook-form";
import { useImageFiles } from "../../../hooks/image-files-hook";
import { useContentFieldFormCreatePost } from "../../../hooks/content-field-form-create-post-hook";
import { ImageForForm } from "./image-for-form/image-for-form";
import { validatorsCreatePostForm } from "../../../validators/validators-create-post-form";
import { ErrorsCreatePost } from "./errors-create-post/error-create-post";
import "./form-create-post.scss";
import { StylesIcon } from "../../../styles/styles-icon";

export interface FormCreatePostFields {
  content: string;
  imgFile: FileList | undefined;
}

//TODO : доделать
const FormCreatePost: FC = () => {
  const { handleSubmit, register, watch, setValue, reset, formState } =
    useForm<FormCreatePostFields>({
      mode: "onChange",
      resolver: yupResolver(validatorsCreatePostForm),
    });
  const imgFile = watch("imgFile");
  const content = watch("content");
  const submitSuccess = () => {
    reset();
    clearImage();
    alert("Ваш пост создан!");
  };
  const removeImg = () => {
    setValue("imgFile", undefined, {
      shouldValidate: true,
    });
    clearImage();
  };
  const {
    mutate,
    error: errorsSumbit,
    isError: isErrorSumbit,
  } = useCreatePostQuery(submitSuccess);
  const { preview, clearImage } = useImageFiles(imgFile);
  const {
    WordLimitExceeded,
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
    mutate(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(createPostSumbit)}>
        <div className="form_body_post">
          <div className="form_body_post__avatar">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
          </div>
          <div className="text_field_form_post__wrapper">
            <TextareaAutosize
              className="form_body_post__text_field"
              placeholder="Что у вас нового?"
              {...register("content")}
            />
          </div>
        </div>
        <div className="form_post_footer">
          <ul className="form_post_footer__icons">
            <li className="form_post_footer__icons__item">
              <input
                {...register("imgFile")}
                id="imgUpload"
                type="file"
                hidden
                accept="image/*"
              />
              <label htmlFor="imgUpload">
                <ImageIcon sx={StylesIcon} />
              </label>
            </li>
            <li className="form_post_footer__icons__item">
              <InsertEmoticonIcon />
            </li>
          </ul>
          <div className="form_post_footer__right">
            <div className="form_post_footer__right__total_count_words">
              {permissibleCountWords}
            </div>
            <div className="form_post_footer__right__border"></div>
            <div className="form_post_footer__right__info_progress info_progress">
              <span className="info_progress__count_words">
                {totalCountWordsInContentField}
              </span>
              <CircularProgress
                variant="determinate"
                color={!WordLimitExceeded ? "primary" : "error"}
                value={
                  WordLimitExceeded
                    ? 100
                    : totalCountWordsInContentFieldInPrecent
                }
              />
            </div>
            <ButtonBlue type="submit">Твитнуть</ButtonBlue>
          </div>
        </div>
      </form>
      {preview && (
        <div className="image_for_form_create_post_wrapper">
          <ImageForForm srcImage={preview} clearImage={removeImg} />
        </div>
      )}
      {(formState.errors?.imgFile ||
        formState.errors?.content ||
        isErrorSumbit) && (
        <div>
          <ErrorsCreatePost
            removeFile={removeImg}
            formState={formState}
            errorsSumbit={errorsSumbit}
          />
        </div>
      )}
    </div>
  );
};

export { FormCreatePost };
