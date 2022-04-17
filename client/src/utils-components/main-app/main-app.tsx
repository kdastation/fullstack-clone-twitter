import { FC } from "react";
import { useCheckAuth } from "../../hooks/check-auth-hook";
import { Router } from "../router/router";
import "./main-app.scss";

const MainApp: FC = () => {
  const { isLoading } = useCheckAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router />
    </div>
  );
};

export { MainApp };
