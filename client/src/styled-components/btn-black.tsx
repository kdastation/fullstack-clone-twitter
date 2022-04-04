import { styled } from "@mui/material/styles";

export const ButtonBlack = styled("button")({
  display: "block",
  cursor: "pointer",
  padding: "15px",
  borderRadius: "30px",
  width: "100%",
  color: "white",
  fontWeight: "600",
  backgroundColor: "black",
  border: "none",
  "&:hover": {
    fontWeight: "900",
  },
  "&: disabled": {
    backgroundColor: "gray",
  },
});
