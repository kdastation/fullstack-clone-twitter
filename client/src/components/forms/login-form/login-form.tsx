import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../async-thunks/auth-async-thunks";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { RoutesPathNames } from "../../../routes/types/routes-path-names";
import { StyledErrorMessageForm } from "../../../styled-components/styled-error-message-form";
import { StyledTextField } from "../../../styled-components/styled-text-field";
import { StyledWrapperInput } from "../../../styled-components/styled-wrapper-input";

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
  const { register, handleSubmit } = useForm<LoginFormFieldls>({
    mode: "onBlur",
  });
  const { messageError, submitData } = useSubmitData(
    async (data: LoginFormFieldls) => {
      await dispatch(loginUser(data.email, data.password));
      navigation(RoutesPathNames.PROFILE_PAGE);
    }
  );
  return (
    <div style={{ maxWidth: "350px" }}>
      {messageError && (
        <StyledErrorMessageForm>{messageError}</StyledErrorMessageForm>
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
        <Button type="submit">Логин</Button>
      </form>
    </div>
  );
};

export { LoginForm };
