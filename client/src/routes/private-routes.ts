import { MainPage } from "../pages/main-page/main-page";
import { IRoute } from "./types/route";
import { RoutesPathNames } from "./types/routes-path-names";

export const privateRoutes: IRoute[] = [
  {
    path: RoutesPathNames.PROFILE_PAGE,
    Component: MainPage,
    exact: true,
  },
];
