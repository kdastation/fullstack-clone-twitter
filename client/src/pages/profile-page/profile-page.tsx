import { Button } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../async-thunks/auth-async-thunks";
import { AuthSelector } from "../../redux/selectors/auth-selector";

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(AuthSelector.getUserData);
  const logoutOnClick = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      PROFILE PAGE
      {userData.email}
      <Button onClick={logoutOnClick}>Выйти</Button>
    </div>
  );
};

export { ProfilePage };
