import { IconButton, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import "./side-bar.scss";
import { ButtonBlue } from "../../styled-components/btn-blue";

const stylesIcon: SxProps<Theme> = {
  color: "#71C9F8",
};

const SideBar: FC = () => {
  return (
    <div>
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
            <div>Посты</div>
          </li>
          <li className="side_bar_icons__item">
            <IconButton>
              <LocalPostOfficeIcon />
            </IconButton>
            <div>Мои посты</div>
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
