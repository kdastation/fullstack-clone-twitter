import { MessageErrorValidate } from "./message-error-validate";
import * as yup from "yup";
import { determineFileType } from "../utils/utils";

export const validatorsFormCreateTrack = yup.object().shape({
  name: yup.string().required(MessageErrorValidate.REQUIRED),
  audio: yup
    .mixed()
    .test("fileUpload", "Добавте файл!", (value: FileList | null) => {
      if (!value) {
        return false;
      }
      return value.length > 0;
    })
    .test(
      "type",
      "Файл, который вы добавили, не является аудио",
      (value: FileList | null) => {
        if (!value) {
          return false;
        }
        const typeFile = determineFileType(value[0]);
        return typeFile === "audio";
      }
    ),
});
