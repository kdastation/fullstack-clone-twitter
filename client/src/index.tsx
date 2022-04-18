import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import { QueryClientProvider } from "react-query";
import { MainApp } from "./utils-components/main-app/main-app";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MainApp />
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
