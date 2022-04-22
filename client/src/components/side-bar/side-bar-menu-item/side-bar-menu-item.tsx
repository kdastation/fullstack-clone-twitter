import { FC } from "react";
import { Link } from "react-router-dom";
import { ISideBarMenuItem } from "../../../types/side-bar-menu-item";
import classnames from "classnames";
import "./side-bar-menu-item.scss";
import { Hidden } from "@mui/material";

interface SideBarMenuItemProps {
  item: ISideBarMenuItem;
  isActive?: boolean;
}

//TODO: Доделать : Изменять цвет текста и иконки, когда isActive = true
const SideBarMenuItem: FC<SideBarMenuItemProps> = (props) => {
  const {
    item: { IconComponent, name, path },
    isActive = false,
  } = props;
  return (
    <li className="side_bar_menu_item_wrapper">
      <Link to={path}>
        <div className="side_bar_menu_item">
          <div>
            <IconComponent color="disabled" />
          </div>

          <Hidden smDown>
            <div
              className={classnames("side_bar_menu_item__name", {
                "side_bar_menu_item__name-active": isActive,
              })}
            >
              {name}
            </div>
          </Hidden>
        </div>
      </Link>
    </li>
  );
};

export { SideBarMenuItem };
