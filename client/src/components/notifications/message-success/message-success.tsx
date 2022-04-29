import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";
import { FC } from "react";

interface MessageSuccesProps {
  isVisibleMessageSuccess: boolean;
  onClose: () => void;
  position?: SnackbarOrigin;
  autoHideDuration?: number;
}

const MessageSuccess: FC<MessageSuccesProps> = (props) => {
  const {
    isVisibleMessageSuccess,
    onClose,
    autoHideDuration,
    position,
    children,
  } = props;
  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={position}
      open={isVisibleMessageSuccess}
      onClose={onClose}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export { MessageSuccess };
