import { Paper } from "@mui/material";
import { FC } from "react";
import { ControllForCreateTrack } from "../../components/controll-for-create-track/controll-for-create-track";
import { Tracks } from "../../components/tracks/tracks";
import "./tracks-user-page.scss";

const TracksUserPage: FC = () => {
  return (
    <div>
      <Paper>
        <div className="tracks_page_top">
          <h3 className="tracks_page_top__title">Музыка</h3>
          <div className="tracks_page_top__tracks_wrapper">
            <ControllForCreateTrack />
          </div>
        </div>
        <Tracks />
      </Paper>
    </div>
  );
};

export { TracksUserPage };
