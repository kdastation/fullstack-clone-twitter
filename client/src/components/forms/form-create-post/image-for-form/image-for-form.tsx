import { FC } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "./image-for-form.scss";

interface ImageForFormProps {
  srcImage: string;
  clearImage: () => void;
}

const ImageForForm: FC<ImageForFormProps> = (props) => {
  const { srcImage, clearImage } = props;
  return (
    <div className="image_for_form_container">
      <div onClick={clearImage} className="clear_image_button">
        <ClearIcon color="primary" />
      </div>

      <img src={srcImage} alt="" />
    </div>
  );
};

export { ImageForForm };
