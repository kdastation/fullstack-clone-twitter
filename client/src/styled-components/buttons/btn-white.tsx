import { styled } from "@mui/material/styles";
import { MainBtn } from "./main-btn";

export const ButtonWhite = styled(MainBtn)({
  borderRadius: "30px",
  border: "1px solid rgb(29, 161, 242)",
  color: "rgb(29, 161, 242)",
  backgroundColor: "white",
  "&:hover": {
    color: "white",
    backgroundColor: "rgb(29, 161, 242)",
  },
});
