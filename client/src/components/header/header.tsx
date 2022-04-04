import { FC } from "react";
import React from "react";
import "./header.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";

const Header: FC = () => {
  return (
    <div className="header_block">
      <div className="header-container">
        <div className="header">
          <div className="header_left">
            <div className="header__menu">
              <div className="menu__icon">
                <MenuIcon color="primary" />
              </div>
              <Typography>фывыфвфывфыв</Typography>
            </div>
            <div className="header__logo">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dea8d27-a9ef-4484-9c20-51f212ebe10f/dd65tbb-545c4f6d-1c6a-4b6f-a19e-499d41142d7d.png/v1/fill/w_894,h_894,q_70,strp/youtube_logo_black_by_revydubz_dd65tbb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzhkZWE4ZDI3LWE5ZWYtNDQ4NC05YzIwLTUxZjIxMmViZTEwZlwvZGQ2NXRiYi01NDVjNGY2ZC0xYzZhLTRiNmYtYTE5ZS00OTlkNDExNDJkN2QucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s8hGNAjaDb77znDop-F-G22liMVttQDeOOXZi1lcxsM"
                alt=""
              />
            </div>
          </div>

          <div className="header__icons btn-container">
            <div className="btn-container__notification">
              <NotificationsIcon sx={{ color: "white" }} />
            </div>
            <div className="btn-container__avatar">
              <img src="https://yt3.ggpht.com/yti/APfAmoFuxPo2yTQdl5r4cMB3DFiSwY6AATYoglxEsg=s88-c-k-c0x00ffffff-no-rj-mo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
