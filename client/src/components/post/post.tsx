import { IconButton, Paper } from "@mui/material";
import { FC, memo } from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IPost } from "../../types/post/post";
import { ApiURLNames } from "../../services/api-service/api-url-names";
import { PostImage } from "./post-image/post-image";
import userIcon from "../../assets/images/user.png";
import "./post.scss";

interface PostProps {
  postData: IPost;
}

const Post: FC<PostProps> = (props) => {
  const { postData } = props;
  return (
    <Paper variant="outlined">
      <div className="post_container">
        <div className="post_wrapper">
          <div className="post_left">
            <img src={userIcon} alt="user" />
          </div>
          <div className="post_body">
            <div className="post_body_header">
              <div className="post_body_header__author">
                <b>{postData.user?.email}</b>
              </div>
            </div>
            <div className="post_body_content">{postData.content}</div>
            {postData?.img && (
              <div className="post_image_wrapper__post_component">
                <PostImage srcImage={ApiURLNames.URL_IMAGES + postData.img} />
              </div>
            )}
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
    </Paper>
  );
};

const MemoPost = memo(Post);

export { Post, MemoPost };
