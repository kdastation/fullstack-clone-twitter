import { IconButton } from "@mui/material";
import { FC } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./post.scss";

const Post: FC = () => {
  return (
    <div>
      <div className="post_wrapper">
        <div className="post_left">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt=""
          />
        </div>
        <div className="post_body">
          <div className="post_body_header">
            <div className="post_body_header__author">
              <b>FavoriteBorderIcon</b>
            </div>
          </div>
          <div className="post_body_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eveniet fugit quis porro pariatur consequatur? Neque eligendi non
            libero est repellat blanditiis quo modi ratione iure! Voluptate
            quibusdam ratione maiores.
          </div>
          <div className="post_body_footer">
            <div className="post_body_footer__icon_btn">
              <IconButton>
                <ChatBubbleIcon color="primary" />
              </IconButton>
              <span className="post_body_footer__icon_btn__number">1</span>
            </div>
            <div className="post_body_footer__icon_btn">
              <IconButton>
                <RepeatIcon color="primary" />
              </IconButton>
            </div>
            <div className="post_body_footer__icon_btn">
              <IconButton>
                <FavoriteBorderIcon color="primary" />
              </IconButton>
            </div>
            <div className="post_body_footer__icon_btn">
              <IconButton>
                <ReplyIcon color="primary" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Post };
