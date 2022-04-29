import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        colorDisabled: {
          color: "black",
        },
        colorPrimary: {
          color: "#71C9F8",
        },
        colorSecondary: {
          color: "white",
        },
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});
