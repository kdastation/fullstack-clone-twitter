import { FC } from "react";
import "./post-image.scss";

interface PostImageProps {
  srcImage: string;
}

const PostImage: FC<PostImageProps> = (props) => {
  const { srcImage } = props;
  return (
    <div className="post_image_wrapper">
      <img src={srcImage} alt="" />
    </div>
  );
};

export { PostImage };
