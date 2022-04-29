import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateTrackQuery } from "../../../query/query-hooks/create-track-hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatorsFormCreateTrack } from "../../../validators/validators-create-track";
import { ErrorForm } from "../../notifications/error-form";
import { useMode } from "../../../hooks/mode-hook";
import "./form-create-track.scss";
import { MessageSuccess } from "../../notifications/message-success/message-success";

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

  const {
    isMode: isVisibleMessageSuccess,
    activateMode: onOpenMessageSuccess,
    deactivateMode: onCloseMessageSuccess,
  } = useMode();

  const { createTrack } = useCreateTrackQuery(onOpenMessageSuccess);

  const createTrackSumbit = async (data: FormCreateTrackFields) => {
    const trackData = new FormData();
    trackData.append("name", data.name);
    if (data.audio) {
      trackData.append("audio", data.audio[0]);
    }
    await createTrack(trackData);
    reset();
  };
  console.log(isVisibleMessageSuccess);

  const audioWatch = watch("audio");
  const audioFile = audioWatch && audioWatch[0];

  return (
    <div className="form_create_track_wrapper form_create_track">
      <div className="form_create_track__logo">
        <img
          src="https://media.istockphoto.com/vectors/monkey-head-sunglasses-and-headphones-vector-id1226467953?k=20&m=1226467953&s=612x612&w=0&h=ShJYyZculStuLedmK12Lu1uZdz64XjFre_Cvu0TP6tM="
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit(createTrackSumbit)}>
        <div>
          <TextField
            error={!!formState.errors?.name?.message}
            helperText={formState.errors?.name?.message}
            label="название трека"
            variant="filled"
            fullWidth
            {...register("name")}
            color="primary"
          />
        </div>
        <div className="form_create_track__file">
          <input
            {...register("audio")}
            id="audioUpload"
            type="file"
            accept="audio/*"
            hidden
          />
          <label htmlFor="audioUpload" className="audio_upload_controll">
            <div>
              <AudioFileIcon color="primary" />
            </div>
            <div className="audio_upload_controll__text">
              Добавить аудио файл
            </div>
          </label>
          {audioFile && (
            <div className="form_create_track__file__name">
              {audioFile.name}
            </div>
          )}
          {formState.errors?.audio?.message && (
            <ErrorForm>{formState.errors?.audio?.message}</ErrorForm>
          )}
        </div>
        <div className="form_create_track__footer">
          <div>
            <TwitterIcon color="primary" />
          </div>
          <div>
            <Button
              type="submit"
              variant="outlined"
              startIcon={<MusicNoteIcon />}
            >
              Создать
            </Button>
          </div>
        </div>
      </form>
      <MessageSuccess
        autoHideDuration={3000}
        onClose={onCloseMessageSuccess}
        isVisibleMessageSuccess={isVisibleMessageSuccess}
        position={{ horizontal: "right", vertical: "top" }}
      >
        Трек создан!
      </MessageSuccess>
    </div>
  );
};

export { FormCreateTrack };
