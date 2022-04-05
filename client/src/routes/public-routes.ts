import { SignInPage } from "../pages/signIn-page/singIn-page";
import { IRoute } from "./types/route";
import { RoutesPathNames } from "./types/routes-path-names";

export const publicRoutes: IRoute[] = [
  {
    path: RoutesPathNames.SIGN_IN_PAGE,
    Component: SignInPage,
    exact: true,
  },
];
