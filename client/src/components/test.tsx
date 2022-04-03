import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../types/user-model";
import { setUser } from "../redux/reducers/auth-reducer";
import { AuthSelector } from "../redux/selectors/auth-selector";

const Test: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(AuthSelector.getAuthStatus);
  console.log(isAuth);
  const changeIsAuth = () => {
    dispatch(setUser({} as IUser));
  };
  return (
    <div>
      helo helo
      <button onClick={changeIsAuth}>OAsd</button>
    </div>
  );
};

export { Test };
