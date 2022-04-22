import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        colorDisabled: {
          color: "black",
        },
        root: {
          cursor: "pointer",
          color: "#1976d2",
        },
      },
    },
  },
});
