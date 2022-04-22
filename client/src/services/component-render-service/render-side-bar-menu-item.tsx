import { SideBarMenuItem } from "../../components/side-bar/side-bar-menu-item/side-bar-menu-item";
import { ISideBarMenuItem } from "../../types/side-bar-menu-item";

export const renderSideBarMenuItem = (item: ISideBarMenuItem) => {
  return <SideBarMenuItem item={item} key={item.path} />;
};
