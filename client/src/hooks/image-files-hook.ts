import { useEffect, useState } from "react";
import { determineFileType } from "../utils/utils";

export const useImageFiles = (file: FileList | undefined) => {
  const [preview, setPreview] = useState<string | null>();
  useEffect(() => {
    if (file) {
      const typeFile = determineFileType(file[0]);
      const isImg = typeFile === "image";
      isImg ? showImage(file[0]) : clearImage();
    }
  }, [file]);

  const clearImage = () => {
    setPreview(null);
  };

  const showImage = (img: File) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreview(fileReader.result as string);
    };
    fileReader.readAsDataURL(img);
  };
  return {
    preview,
    clearImage,
  };
};
