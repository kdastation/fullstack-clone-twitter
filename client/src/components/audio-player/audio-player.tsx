import { FC, useEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks/toggle-hook";
import { ApiURLNames } from "../../services/api-service/api-url-names";

const AudioPlayer: FC = () => {
  const [active, setActive] = useState(false);
  const [duration, setDuration] = useState(0);
  const audio = useRef<HTMLAudioElement | null>(null);
  const { toggleStatus: isPause, handleToggle } = useToggle();

  useEffect(() => {
    if (audio) {
      setAudio();
    }
  }, [active]);

  const setAudio = () => {
    if (active && audio.current) {
      audio.current.src = ApiURLNames.URL_AUDIO + "qweqwe.mp3";
      audio.current.volume = 50 / 100;
      audio.current.onloadeddata = () => {
        setDuration(Math.ceil(audio.current!.duration));
      };
    }
  };

  const togglePlayPause = () => {
    handleToggle();
    if (audio.current) {
      !isPause ? audio.current.play() : audio.current.pause();
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => setActive(true)}>ACTIVE</button>
      </div>
      <audio ref={audio}></audio>
      <div>
        Аудио {duration}
        <button onClick={togglePlayPause}>{isPause ? "Pause" : "Play"}</button>
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export { AudioPlayer };
