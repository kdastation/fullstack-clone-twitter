import { Modal } from "@mui/material";
import { FC } from "react";
import "./custom-modal.scss";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
  isActiveModal: boolean;
  onCloseModal: () => void;
}

const CustomModal: FC<CustomModalProps> = (props) => {
  const { isActiveModal, onCloseModal, children } = props;
  return (
    <>
      <Modal
        open={isActiveModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal_wrapper">
          <div className="modal_close_icon_wrapper">
            <div onClick={onCloseModal} className="modal_close_icon">
              <CloseIcon sx={{ fontSize: "35px" }} />
            </div>
          </div>
          {children}
        </div>
      </Modal>
    </>
  );
};

export { CustomModal };
