import { FC } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./form-create-post.scss";
import ImageIcon from "@mui/icons-material/Image";
import { ButtonBlue } from "../../../styled-components/btn-blue";
import CircularProgress from "@mui/material/CircularProgress";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const FormCreatePost: FC = () => {
  return (
    <div>
      <form action="">
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
              280
            </div>
            <div className="form_post_footer__right__border"></div>
            <div className="form_post_footer__right__info_progress info_progress">
              <span className="info_progress__count_words">10</span>
              <CircularProgress
                variant="determinate"
                color="primary"
                value={100}
              />
            </div>
            <ButtonBlue>Твитнуть</ButtonBlue>
          </div>
        </div>
      </form>
    </div>
  );
};

export { FormCreatePost };
