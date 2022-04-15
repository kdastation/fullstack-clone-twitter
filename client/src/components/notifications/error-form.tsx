import { Alert, AlertTitle } from "@mui/material";
import { FC } from "react";

const ErrorForm: FC = (props) => {
  const { children } = props;
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Ошибка!</AlertTitle>
        {children}
      </Alert>
    </div>
  );
};

export { ErrorForm };
