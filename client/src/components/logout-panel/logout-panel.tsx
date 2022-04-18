import { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../redux/selectors/auth-selector";
import { ButtonBlue } from "../../styled-components/buttons/btn-blue";
import { logoutUser } from "../../async-thunks/auth-async-thunks";
import "./logout-panel.scss";

const LogoutPanel: FC = () => {
  const user = useSelector(AuthSelector.getUserData);
  const dispatch = useDispatch();

  const logoutOnClick = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="logout_panel">
      <div>
        <AccountCircleIcon />
      </div>
      <div className="logout_panel__user_name">{user.email}</div>
      <div className="logout_panel__btn_wrapper">
        <ButtonBlue onClick={logoutOnClick}>Выйти</ButtonBlue>
      </div>
    </div>
  );
};

export { LogoutPanel };
