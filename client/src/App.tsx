import { FC } from "react";
import { Router } from "./utils-components/router/router";
import { Header } from "./components/header/header";
import "./app.scss";
import { SignInPage } from "./pages/signIn-page/singIn-page";

const App: FC = () => {
  return (
    <div>
      <SignInPage />
      {/* <Header />
      <Router /> */}
    </div>
  );
};

export default App;
