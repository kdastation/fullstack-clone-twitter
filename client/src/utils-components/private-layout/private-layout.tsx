import { FC } from "react";
import { Outlet } from "react-router-dom";
import { AudioPlayer } from "../../components/audio-player/audio-player";
import { LogoutPanel } from "../../components/logout-panel/logout-panel";
import { SideBar } from "../../components/side-bar/side-bar";
import "./private-layout.scss";

const PrivateLayout: FC = () => {
  return (
    <div className="layout_container">
      <div className="layout_container__side_bar">
        <div className="layout_container__side_bar_items">
          <AudioPlayer />
          <SideBar />
        </div>
      </div>
      <div className="layout_container__body">
        <Outlet />
      </div>
      <div className="layout_container__info">
        <LogoutPanel />
      </div>
    </div>
  );
};

export { PrivateLayout };
