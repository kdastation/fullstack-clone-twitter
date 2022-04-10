import { FC } from "react";
import { FormState } from "react-hook-form";
import { ErrorForm } from "../../../notifications/error-form";
import { FormCreatePostFields } from "../form-create-post";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./error-create-post.scss";

interface ErrorsCreatePostProps {
  formState: FormState<FormCreatePostFields>;
  removeFile: () => void;
  errorsSumbit: any;
}

const ErrorsCreatePost: FC<ErrorsCreatePostProps> = (props) => {
  const { formState, removeFile, errorsSumbit } = props;
  return (
    <div>
      {formState.errors?.content?.message && (
        <ErrorForm>{formState?.errors?.content?.message}</ErrorForm>
      )}
      {formState.errors?.imgFile?.type === "type" && (
        <ErrorForm>
          <p>{formState.errors?.imgFile?.message}</p>
          <p>
            Чтобы продолжить создания поста вам нужно удалить файл
            <button
              className="btn_remove_file_in_errors"
              type="button"
              onClick={removeFile}
            >
              <div>Удалить</div>
              <div>
                <DeleteOutlineIcon />
              </div>
            </button>
          </p>
        </ErrorForm>
      )}
      {errorsSumbit?.message && <ErrorForm>{errorsSumbit?.message}</ErrorForm>}
      {errorsSumbit?.response?.data?.message && (
        <ErrorForm>{errorsSumbit?.response?.data?.message}</ErrorForm>
      )}
    </div>
  );
};

export { ErrorsCreatePost };
