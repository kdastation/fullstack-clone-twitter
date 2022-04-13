import { FC } from "react";
import { BlackInput } from "../../../styled-components/black-input";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateTrackQuery } from "../../../query/query-hooks.ts/create-track-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsFormCreateTrack } from "../../../validators/validators-create-track";
import "./form-create-track.scss";

interface FormCreateTrackFields {
  name: string;
  audio: FileList | null;
}

const FormCreateTrack: FC = () => {
  const { handleSubmit, formState, register, watch, reset } =
    useForm<FormCreateTrackFields>({
      mode: "onBlur",
      defaultValues: {
        audio: null,
        name: "",
      },
      resolver: yupResolver(validatorsFormCreateTrack),
    });
  const { createTrack } = useCreateTrackQuery();
  const audioWatch = watch("audio");
  const audioFile = audioWatch && audioWatch[0];
  const createTrackSumbit = async (data: FormCreateTrackFields) => {
    console.log(data);
    const trackData = new FormData();
    trackData.append("name", data.name);
    if (data.audio) {
      trackData.append("audio", data.audio[0]);
    }

    await createTrack(trackData);
    reset();
  };

  console.log(formState.errors, audioFile);

  return (
    <div>
      <form onSubmit={handleSubmit(createTrackSumbit)}>
        <div>
          <BlackInput {...register("name")} />
        </div>
        <div className="audio_upload_wrapper">
          <input
            {...register("audio")}
            id="audioUpload"
            type="file"
            accept="audio/*"
            hidden
          />
          <label htmlFor="audioUpload" className="audio_upload_controll">
            <div>
              <AudioFileIcon />
            </div>
            <div className="audio_upload_controll__text">Добавить аудио</div>
          </label>
          {audioFile && <div>{audioFile.name}</div>}
        </div>
        <div>
          <Button
            type="submit"
            variant="outlined"
            startIcon={<MusicNoteIcon />}
          >
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export { FormCreateTrack };
