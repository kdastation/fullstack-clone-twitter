import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./query";
import { QueryClientProvider } from "react-query";
import { MainApp } from "./utils-components/main-app/main-app";
import { theme } from "./styles/theme";

const root = createRoot(document.getElementById("root") as HTMLElement);

const indexComponent = (
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
);

root.render(indexComponent);
