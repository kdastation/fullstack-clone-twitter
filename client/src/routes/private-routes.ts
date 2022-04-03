import { ProfilePage } from "../pages/profile-page/profile-page";
import { IRoute } from "./types/route";
import { RoutesPathNames } from "./types/routes-path-names";

export const privateRoutes: IRoute[] = [
  {
    path: RoutesPathNames.PROFILE_PAGE,
    Component: ProfilePage,
    exact: true,
  },
];
