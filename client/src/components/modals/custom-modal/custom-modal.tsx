import { Modal, Paper } from "@mui/material";
import { FC } from "react";
import "./custom-modal.scss";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
  isActiveModal: boolean;
  onCloseModal: () => void;
  title: string;
}

const CustomModal: FC<CustomModalProps> = (props) => {
  const { isActiveModal, onCloseModal, children, title } = props;
  return (
    <>
      <Modal
        open={isActiveModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal_wrapper">
          <Paper elevation={3}>
            <div className="modal_header">
              <div onClick={onCloseModal} className="modal_close_icon">
                <CloseIcon color="primary" sx={{ fontSize: "35px" }} />
              </div>
              <div className="modal_header__title">{title}</div>
            </div>
          </Paper>
          {children}
        </div>
      </Modal>
    </>
  );
};

export { CustomModal };
