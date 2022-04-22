import { IconButton, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ButtonBlue } from "../../styled-components/buttons/btn-blue";
import { List } from "../../utils-components/list/list";
import { sideBarMenuData } from "./side-bar-menu-data";
import { renderSideBarMenuItem } from "../../services/component-render-service/render-side-bar-menu-item";
import "./side-bar.scss";

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
          <List items={sideBarMenuData} renderItem={renderSideBarMenuItem} />
        </ul>
        <div>
          <ButtonBlue>Твитнуть</ButtonBlue>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
