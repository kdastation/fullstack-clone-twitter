import { FC, useEffect } from "react";
import { Router } from "./utils-components/router/router";
import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "./redux/selectors/auth-selector";
import { checkAuth } from "./async-thunks/auth-async-thunks";

//TODO: Доделать
const App: FC = () => {
  const isLoading = useSelector(AuthSelector.getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
