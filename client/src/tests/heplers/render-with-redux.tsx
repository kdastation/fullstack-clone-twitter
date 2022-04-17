import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../../redux/store";

const RenderWithRedux = (component: ReactElement, initialState?: Object) => {
  const store = createReduxStore();
  return render(<Provider store={store}>{component}</Provider>);
};

export { RenderWithRedux };
