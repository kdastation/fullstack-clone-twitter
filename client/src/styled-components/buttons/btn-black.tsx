import { styled } from "@mui/material/styles";
import { MainBtn } from "./main-btn";

export const ButtonBlack = styled(MainBtn)({
  borderRadius: "30px",
  color: "white",
  backgroundColor: "black",
  "&:hover": {
    fontWeight: "900",
  },
  "&: disabled": {
    backgroundColor: "gray",
  },
});
