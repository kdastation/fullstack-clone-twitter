import { FC } from "react";
import { FormCreatePost } from "./components/forms/form-create-post";
import { LoginForm } from "./components/forms/login-form";
import { Test } from "./components/test";
import { Users } from "./components/users/users";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <Test />
      <FormCreatePost />
      <Users />
    </div>
  );
};

export default App;
