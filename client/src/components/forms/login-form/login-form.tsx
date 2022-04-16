import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../async-thunks/auth-async-thunks";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { RoutesPathNames } from "../../../routes/types/routes-path-names";
import { ButtonBlack } from "../../../styled-components/btn-black";
import { StyledTextField } from "../../../styled-components/styled-text-field";
import { StyledWrapperInput } from "../../../styled-components/styled-wrapper-input";
import { ErrorForm } from "../../notifications/error-form";

interface LoginFormProps {
  changeTypeForm?: () => void;
}

interface LoginFormFieldls {
  email: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { register, handleSubmit, formState } = useForm<LoginFormFieldls>({
    mode: "onBlur",
  });
  const { messageError, submitData } = useSubmitData(
    async (data: LoginFormFieldls) => {
      await dispatch(loginUser(data.email, data.password));
      navigation(RoutesPathNames.PROFILE_PAGE);
    }
  );
  return (
    <div>
      {messageError && (
        <StyledWrapperInput>
          <ErrorForm>{messageError}</ErrorForm>
        </StyledWrapperInput>
      )}
      <form onSubmit={handleSubmit(submitData)}>
        <StyledWrapperInput>
          <StyledTextField
            {...register("email")}
            error={!!messageError}
            label="email"
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <StyledTextField
            {...register("password")}
            error={!!messageError}
            label="password"
            type="password"
          />
        </StyledWrapperInput>
        <ButtonBlack disabled={formState.isSubmitting} type="submit">
          <div data-testid="login">Логин</div>
        </ButtonBlack>
      </form>
    </div>
  );
};

export { LoginForm };
