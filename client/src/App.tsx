import { FC } from "react";
import { MainAuthForm } from "./components/forms/main-auth-form/main-auth-form";
import { Router } from "./utils-components/router/router";

const App: FC = () => {
  return (
    <div>
      <MainAuthForm />
      <Router />
    </div>
  );
};

export default App;
