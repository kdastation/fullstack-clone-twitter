import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";
import { FC } from "react";

interface MessageSuccesProps {
  isVisibleMessageSucces: boolean;
  onClose: () => void;
  position?: SnackbarOrigin;
  autoHideDuration?: number;
}

const MessageSucces: FC<MessageSuccesProps> = (props) => {
  const {
    isVisibleMessageSucces,
    onClose,
    autoHideDuration,
    position,
    children,
  } = props;
  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={position}
      open={isVisibleMessageSucces}
      onClose={onClose}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export { MessageSucces };
