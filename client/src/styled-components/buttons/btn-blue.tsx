import { MainBtn } from "./main-btn";
import { styled } from "@mui/material/styles";

export const ButtonBlue = styled(MainBtn)({
  borderRadius: "30px",
  color: "white",
  backgroundColor: "rgb(29, 161, 242)",
  "&:hover": {
    color: "rgb(29, 161, 242)",
    backgroundColor: "white",
    border: "1px solid rgb(29, 161, 242)",
  },
  "&: disabled": {
    backgroundColor: "rgba(29, 161, 242, 0.4)",
  },
});
