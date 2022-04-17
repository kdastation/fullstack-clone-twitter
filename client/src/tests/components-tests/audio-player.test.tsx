import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RenderWithRedux } from "../heplers/render-with-redux";
import { Track } from "../../components/tracks/track/track";
import { ITrack } from "../../types/track-model";
import { AudioPlayer } from "../../components/audio-player/audio-player";
import userEvent from "@testing-library/user-event";

const track: ITrack = {
  name: "qwe",
  audio: "qwe.mp3",
  id: 1,
};

describe("Audio PLayer Component", () => {
  test("the track component must be rendered, but the player component is not", () => {
    RenderWithRedux(
      <>
        <Track track={track} />
        <AudioPlayer />
      </>
    );
    expect(screen.queryByTestId("togglePlayPause")).toBeNull();
    expect(screen.getByTestId("runTrack")).toBeInTheDocument();
  });

  test("the track name should be displayed in the player when the track is selected", async () => {
    RenderWithRedux(
      <>
        <Track track={track} />
        <AudioPlayer />
      </>
    );
    userEvent.click(screen.getByTestId("runTrack"));
    const trackNameInAudioPlayer = await screen.findByTestId(
      "player_track_name"
    );
    expect(trackNameInAudioPlayer).toHaveTextContent(track.name);
  });

  test("must be synchronized on play/pause", async () => {
    RenderWithRedux(
      <>
        <Track track={track} />
        <AudioPlayer />
      </>
    );
    userEvent.click(screen.getByTestId("runTrack")); // component Track
    const pauseIcon = await screen.findByTestId("player_icon_pause"); //component Player
    expect(pauseIcon).toBeInTheDocument();
    userEvent.click(screen.getByTestId("stopTrack")); //component Track
    const playIcon = await screen.findByTestId("player_icon_play"); // component Player
    expect(playIcon).toBeInTheDocument();
  });
});
