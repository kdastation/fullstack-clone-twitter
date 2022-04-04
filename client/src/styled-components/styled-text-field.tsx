import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)({
  width: "100%",
  color: "black",
  "& .MuiOutlinedInput-root": {
    "& label.Mui-focused": {
      color: "black",
    },
    "& fieldset": {
      border: "3px solid black",
      borderRadius: "5px",
      height: "50px",
      lineHeight: "normal",
      paddingLeft: "12px",
      fontSize: "16px",
      outline: "none",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid blue",
    },
  },
});
