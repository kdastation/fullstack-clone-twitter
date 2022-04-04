import { StyledTextField } from "../../../styled-components/styled-text-field";
import { FC } from "react";
import { StyledWrapperInput } from "../../../styled-components/styled-wrapper-input";
import { useForm } from "react-hook-form";
import { ButtonBlack } from "../../../styled-components/btn-black";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validators = yup.object().shape({
  email: yup.string().required("Поле обязательно для заполнения"),
  password: yup.string().required("Поле обязательно для заполнения"),
  confirmPassword: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});

interface RegistrationFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: FC = (props) => {
  const { register, handleSubmit, formState } = useForm<RegistrationFormFields>(
    {
      mode: "onBlur",
      resolver: yupResolver(validators),
    }
  );
  const testSubmit = (data: RegistrationFormFields) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(testSubmit)}>
        <StyledWrapperInput>
          <StyledTextField
            error={!!formState.errors?.email}
            helperText={formState.errors.email?.message || ""}
            label="email"
            {...register("email")}
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <StyledTextField
            error={!!formState.errors?.password?.message}
            helperText={formState.errors?.password?.message}
            type="password"
            label="password"
            {...register("password")}
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <StyledTextField
            error={!!formState.errors?.confirmPassword?.message}
            helperText={formState.errors?.confirmPassword?.message}
            type="password"
            label="confirmPassword"
            {...register("confirmPassword")}
          />
        </StyledWrapperInput>
        <ButtonBlack disabled={formState.isSubmitting} type="submit">
          <div>Зарегистроваться</div>
        </ButtonBlack>
      </form>
    </div>
  );
};

export { RegistrationForm };
