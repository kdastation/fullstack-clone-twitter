import { FC } from "react";
import { useMode } from "../../hooks/mode-hook";
import { CustomModal } from "../custom-modal/custom-modal";
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
        <button onClick={onOpenModal}>Добавить трек</button>
      </div>
      {isVisibleModal && (
        <CustomModal isActiveModal={isVisibleModal} onCloseModal={onCloseModal}>
          <div className="form_modal_wrapper">
            <FormCreateTrack />
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export { ControllForCreateTrack };
