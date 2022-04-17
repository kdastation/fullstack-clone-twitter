import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";

const RenderWithReduxAndRouter = (component: ReactElement) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

export { RenderWithReduxAndRouter };
