import { IconButton } from "@mui/material";
import { FC, memo } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IPost } from "../../types/post/post";
import "./post.scss";

interface PostProps {
  postData: IPost;
}

const Post: FC<PostProps> = (props) => {
  const { postData } = props;
  console.log("RENDER POST", postData.id);
  return (
    <div className="post_container">
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
          <div className="post_body_content">{postData.content}</div>
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

const MemoPost = memo(Post);

export { Post, MemoPost };
