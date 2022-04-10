import { IconButton, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { ButtonBlue } from "../../styled-components/btn-blue";
import "./side-bar.scss";
import { Link } from "react-router-dom";
import { RoutesPathNames } from "../../routes/types/routes-path-names";

const stylesIcon: SxProps<Theme> = {
  color: "#71C9F8",
};

const SideBar: FC = () => {
  return (
    <div className="side_bar_wrapper">
      <div>
        <ul className="side_bar_icons">
          <li className="side_bar_icons__item">
            <IconButton>
              <TwitterIcon sx={stylesIcon} />
            </IconButton>
          </li>
          <li className="side_bar_icons__item">
            <IconButton>
              <AutoAwesomeMotionIcon />
            </IconButton>
            <div>
              <Link to={RoutesPathNames.PROFILE_PAGE}>Главная</Link>
            </div>
          </li>
          <li className="side_bar_icons__item">
            <IconButton>
              <LocalPostOfficeIcon />
            </IconButton>
            <div>
              <Link to={RoutesPathNames.POSTS_USER_PAGE}>Мои посты</Link>
            </div>
          </li>
          <li className="side_bar_icons__item">
            <IconButton>
              <MusicNoteIcon />
            </IconButton>
            <div>Моя музыка</div>
          </li>
        </ul>
        <div>
          <ButtonBlue>Твитнуть</ButtonBlue>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
