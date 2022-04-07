import { FC } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./form-create-post.scss";
import ImageIcon from "@mui/icons-material/Image";
import { ButtonBlue } from "../../../styled-components/btn-blue";
import CircularProgress from "@mui/material/CircularProgress";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useFormCreatePost } from "../../../hooks/form-create-post-hook";

export interface FormCreatePostFields {
  content: string;
}
//TODO : доделать
const FormCreatePost: FC = () => {
  const {
    totalCountWordsInContentField,
    totalCountWordsInContentFieldInPrecent,
    permissibleCountWords,
    WordLimitExceeded,
    handleSubmit,
    createPostSumbit,
    register,
  } = useFormCreatePost();
  console.log(totalCountWordsInContentField);
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
              <ImageIcon />
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
    </div>
  );
};

export { FormCreatePost };
