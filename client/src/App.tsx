import { FC } from "react";
import { FormCreatePost } from "./components/forms/form-create-post";
import { LoginForm } from "./components/forms/login-form";
import { Test } from "./components/test";
import { Users } from "./components/users/users";
import { Router } from "./utils-components/router/router";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <Router />
    </div>
  );
};

export default App;
