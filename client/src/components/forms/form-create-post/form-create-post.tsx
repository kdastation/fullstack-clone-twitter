import { FC } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { ButtonBlue } from "../../../styled-components/buttons/btn-blue";
import CircularProgress from "@mui/material/CircularProgress";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { ErrorsCreatePost } from "./errors-create-post/error-create-post";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { ImageForForm } from "./image-for-form/image-for-form";
import { useFormCreatPostMain } from "../../../hooks/form-create-post-main-hook";
import userIcon from "../../../assets/images/user.png";
import "./form-create-post.scss";

export interface FormCreatePostFields {
  content: string;
  imgFile: FileList | undefined;
}

const FormCreatePost: FC = () => {
  const {
    errorsSumbit,
    formState,
    permissibleCountWords,
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    isWordLimitExceeded,
    isErrorSumbit,
    preview,
    createPostSumbit,
    register,
    removeImg,
    handleSubmit,
  } = useFormCreatPostMain();
  return (
    <div className="form_create_post_wrapper">
      <form onSubmit={handleSubmit(createPostSumbit)}>
        <div className="form_body_post">
          <div className="form_body_post__avatar">
            <img src={userIcon} alt="user" />
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
                <AddPhotoAlternateIcon color="primary" />
              </label>
            </li>
            <li className="form_post_footer__icons__item icon__item_emoji">
              <InsertEmoticonIcon color="primary" />
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
                color={!isWordLimitExceeded ? "primary" : "error"}
                value={
                  isWordLimitExceeded
                    ? 100
                    : totalCountWordsInContentFieldInPrecent
                }
              />
            </div>
            <ButtonBlue disabled={formState.isSubmitting} type="submit">
              Твитнуть
            </ButtonBlue>
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
