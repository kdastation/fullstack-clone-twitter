import { FC } from "react";
import { LoginForm } from "./components/forms/login-form";
import { Test } from "./components/test";
import { Users } from "./components/users/users";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <Test />
      <Users />
    </div>
  );
};

export default App;
