import { LoginPage } from "../pages/login-page/login-page";
import { RegistrationPage } from "../pages/registration-page/registration-page";
import { IRoute } from "./types/route";
import { RoutesPathNames } from "./types/routes-path-names";

export const publicRoutes: IRoute[] = [
  {
    path: RoutesPathNames.LOGIN_PAGE,
    Component: LoginPage,
    exact: true,
  },
  {
    path: RoutesPathNames.REGISTRATION_PAGE,
    Component: RegistrationPage,
    exact: true,
  },
];
