import { IconButton } from "@mui/material";
import { FC } from "react";
import { useMode } from "../../hooks/mode-hook";
import { CustomModal } from "../modals/custom-modal/custom-modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FormCreateTrack } from "../forms/form-create-track/form-create-track";
import "./controll-for-create-track.scss";

const ControllForCreateTrack: FC = () => {
  const {
    isMode: isVisibleModal,
    activateMode: onOpenModal,
    deactivateMode: onCloseModal,
  } = useMode();
  return (
    <div>
      <div>
        <IconButton onClick={onOpenModal}>
          <AddCircleIcon color="primary" />
        </IconButton>
      </div>
      {isVisibleModal && (
        <CustomModal
          title="Создать трек"
          isActiveModal={isVisibleModal}
          onCloseModal={onCloseModal}
        >
          <div className="form_modal_wrapper">
            <FormCreateTrack />
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export { ControllForCreateTrack };
