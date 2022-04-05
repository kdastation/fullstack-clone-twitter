import { FC, useEffect } from "react";
import { Router } from "./utils-components/router/router";
import "./app.scss";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "./redux/selectors/auth-selector";
import { checkAuth } from "./async-thunks/auth-async-thunks";
import { FormCreatePost } from "./components/forms/form-create-post/form-create-post";
import { Post } from "./components/post/post";

//TODO: Доделать
const App: FC = () => {
  // const isLoading = useSelector(AuthSelector.getLoadingStatus);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Post />
      <FormCreatePost />
      {/* <Router /> */}
    </div>
  );
};

export default App;
