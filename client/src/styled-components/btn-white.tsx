import { styled } from "@mui/material/styles";

export const ButtonWhite = styled("button")({
  display: "block",
  cursor: "pointer",
  padding: "15px",
  borderRadius: "30px",
  border: "1px solid rgb(29, 161, 242)",
  width: "100%",
  color: "rgb(29, 161, 242)",
  fontWeight: "600",
  backgroundColor: "white",
  "&:hover": {
    color: "white",
    backgroundColor: "rgb(29, 161, 242)",
  },
});
