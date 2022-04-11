import * as yup from "yup";
import { determineFileType } from "../utils/utils";

export const validatorsCreatePostForm = yup.object().shape({
  imgFile: yup
    .mixed()
    .test(
      "type",
      "Файл, который вы хотите прикрепить к посту, не является картинкой",
      (value: FileList) => {
        if (!value || !value?.length) {
          return true;
        }
        const typeFile = determineFileType(value[0]);
        return typeFile === "image";
      }
    ),
  content: yup.string().max(280, "Максимальная длина поста 280 символов"),
});
