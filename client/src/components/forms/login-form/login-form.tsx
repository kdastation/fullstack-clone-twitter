import { TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../async-thunks/auth-async-thunks";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { RoutesPathNames } from "../../../routes/types/routes-path-names";
import { ButtonBlue } from "../../../styled-components/buttons/btn-blue";
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
          <TextField
            {...register("email")}
            error={!!messageError}
            label="email"
            fullWidth
            variant="filled"
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <TextField
            {...register("password")}
            error={!!messageError}
            label="password"
            type="password"
            variant="filled"
            fullWidth
          />
        </StyledWrapperInput>
        <ButtonBlue disabled={formState.isSubmitting} type="submit">
          <div data-testid="login">Логин</div>
        </ButtonBlue>
      </form>
    </div>
  );
};

export { LoginForm };
