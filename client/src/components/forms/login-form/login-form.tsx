import { FC } from "react";
import { TextField, Button } from "@mui/material";

interface LoginFormProps {
  changeTypeForm: () => void;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { changeTypeForm } = props;
  return (
    <div style={{ marginTop: "10px" }}>
      <form action="">
        <TextField sx={{ width: "100%" }} label="email" />
        <TextField sx={{ width: "100%" }} label="password" type="password" />
        <div>
          <Button>Войти</Button>
          <Button onClick={changeTypeForm}>Зарегистроваться</Button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
