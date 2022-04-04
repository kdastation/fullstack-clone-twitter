import { styled } from "@mui/material/styles";

export const ButtonBlue = styled("button")({
  display: "block",
  cursor: "pointer",
  padding: "15px",
  borderRadius: "30px",
  width: "100%",
  color: "white",
  fontWeight: "600",
  backgroundColor: "rgb(29, 161, 242)",
  border: "none",
  "&:hover": {
    color: "rgb(29, 161, 242)",
    backgroundColor: "white",
    border: "1px solid rgb(29, 161, 242)",
  },
});
