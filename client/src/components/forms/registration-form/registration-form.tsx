import { StyledTextField } from "../../../styled-components/styled-text-field";
import { FC } from "react";
import { StyledWrapperInput } from "../../../styled-components/styled-wrapper-input";
import { useForm } from "react-hook-form";
import { ButtonBlack } from "../../../styled-components/btn-black";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsRegistrationForm } from "../../../validators/validators-registration-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSubmitData } from "../../../hooks/submit-data-hook";
import { registrationUser } from "../../../async-thunks/auth-async-thunks";
import { RoutesPathNames } from "../../../routes/types/routes-path-names";
import { ErrorForm } from "../../notifications/error-form";

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
      async (data: RegistrationFormFields) => {
        await dispatch(registrationUser(data.email, data.password));
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
          <StyledTextField
            error={!!formState.errors?.email}
            helperText={formState.errors.email?.message}
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
