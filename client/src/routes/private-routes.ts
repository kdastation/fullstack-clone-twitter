import { MainPage } from "../pages/main-page/main-page";
import { PostsUserPage } from "../pages/posts-user-page/posts-user-page";
import { TracksUserPage } from "../pages/tracks-user-page/tracks-user-page";
import { IRoute } from "./types/route";
import { RoutesPathNames } from "./types/routes-path-names";

export const privateRoutes: IRoute[] = [
  {
    path: RoutesPathNames.PROFILE_PAGE,
    Component: MainPage,
    exact: true,
  },
  {
    path: RoutesPathNames.POSTS_USER_PAGE,
    Component: PostsUserPage,
  },
  {
    path: RoutesPathNames.TRACKS_USER_PAGE,
    Component: TracksUserPage,
  },
];
