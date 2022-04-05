import { MessageErrorValidate } from "./message-error-validate";
import * as yup from "yup";

export const validatorsRegistrationForm = yup.object().shape({
  email: yup.string().required(MessageErrorValidate.REQUIRED),
  password: yup.string().required(MessageErrorValidate.REQUIRED),
  confirmPassword: yup
    .string()
    .required(MessageErrorValidate.REQUIRED)
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});
