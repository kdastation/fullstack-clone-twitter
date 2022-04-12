import { FC } from "react";
import { Track } from "./track/track";

const Tracks: FC = () => {
  const data = [
    { id: 1, name: "Qwe", audio: "qweqwe.mp3" },
    { id: 2, name: "zxc", audio: "zxc.mp3" },
  ];
  return (
    <div>
      {data.map((track) => {
        return <Track key={track.id} track={track} />;
      })}
    </div>
  );
};

export { Tracks };
