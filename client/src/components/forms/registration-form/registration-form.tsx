import { FC } from "react";
import { StyledWrapperInput } from "../../../styled-components/styled-wrapper-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsRegistrationForm } from "../../../validators/validators-registration-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { registrationUser } from "../../../async-thunks/auth-async-thunks";
import { RoutesPathNames } from "../../../routes/types/routes-path-names";
import { ErrorForm } from "../../notifications/error-form";
import { TextField } from "@mui/material";
import { ButtonBlue } from "../../../styled-components/buttons/btn-blue";

interface RegistrationFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: FC = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { register, handleSubmit, formState } = useForm<RegistrationFormFields>(
    {
      mode: "onBlur",
      resolver: yupResolver(validatorsRegistrationForm),
    }
  );
  const { submitData: registerUserSubmit, messageError } =
    useSubmitData<RegistrationFormFields>(
      async ({ email, password }: RegistrationFormFields) => {
        await dispatch(registrationUser(email, password));
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
      <form onSubmit={handleSubmit(registerUserSubmit)}>
        <StyledWrapperInput>
          <TextField
            data-testid="email"
            error={!!formState.errors?.email}
            helperText={formState.errors.email?.message}
            label="email"
            fullWidth
            variant="filled"
            {...register("email")}
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <TextField
            error={!!formState.errors?.password?.message}
            helperText={formState.errors?.password?.message}
            type="password"
            data-testid="password"
            label="password"
            fullWidth
            variant="filled"
            {...register("password")}
          />
        </StyledWrapperInput>
        <StyledWrapperInput>
          <TextField
            error={!!formState.errors?.confirmPassword?.message}
            helperText={formState.errors?.confirmPassword?.message}
            type="password"
            data-testid="confirmPassword"
            label="confirmPassword"
            fullWidth
            variant="filled"
            {...register("confirmPassword")}
          />
        </StyledWrapperInput>
        <ButtonBlue
          data-testid="registerBtn"
          disabled={formState.isSubmitting}
          type="submit"
        >
          <div>Зарегистроваться</div>
        </ButtonBlue>
      </form>
    </div>
  );
};

export { RegistrationForm };
