import { Outlet } from "react-router-dom";
import { SideBar } from "../side-bar/side-bar";
import "./private-layout.scss";

const PrivateLayout = () => {
  return (
    <div className="layout_container">
      <div className="layout_container__side_bar">
        <SideBar />
      </div>
      <div className="layout_container__body">
        <Outlet />
      </div>
      <div className="layout_container__info">asdasd</div>
    </div>
  );
};

export { PrivateLayout };
