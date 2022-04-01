import { FC } from "react";
import { LoginForm } from "./components/forms/login-form";
import { Test } from "./components/test";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <Test />
    </div>
  );
};

export default App;
