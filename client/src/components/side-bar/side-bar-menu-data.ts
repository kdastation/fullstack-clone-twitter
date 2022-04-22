import { RoutesPathNames } from "../../routes/types/routes-path-names";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { ISideBarMenuItem } from "../../types/side-bar-menu-item";

export const sideBarMenuData: ISideBarMenuItem[] = [
  {
    name: "Главная",
    IconComponent: AutoAwesomeMotionIcon,
    path: RoutesPathNames.PROFILE_PAGE,
  },
  {
    name: "Мои Посты",
    IconComponent: LocalPostOfficeIcon,
    path: RoutesPathNames.POSTS_USER_PAGE,
  },
  {
    name: "Моя музыка",
    IconComponent: MusicNoteIcon,
    path: RoutesPathNames.TRACKS_USER_PAGE,
  },
];
