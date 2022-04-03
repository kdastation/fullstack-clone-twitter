import { StyledTextField } from "../../../styled-components/styled-text-field";
import { FC } from "react";

interface RegistrationFormProps {
  changeTypeForm: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const { changeTypeForm } = props;
  return (
    <div>
      <form action="">
        <StyledTextField label="login" />
        <StyledTextField label="password" type="password" />
        <StyledTextField label="password" type="password" />
        <div></div>
      </form>
    </div>
  );
};

export { RegistrationForm };
