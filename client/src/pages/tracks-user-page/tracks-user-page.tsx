import { FC } from "react";
import { ControllForCreateTrack } from "../../components/controll-for-create-track/controll-for-create-track";
import { Tracks } from "../../components/tracks/tracks";

const TracksUserPage: FC = () => {
  return (
    <div>
      <ControllForCreateTrack />
      <Tracks />
    </div>
  );
};

export { TracksUserPage };
