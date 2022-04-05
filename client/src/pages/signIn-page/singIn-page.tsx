import { FC } from "react";
import "./sign-in-page.scss";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { ButtonBlue } from "../../styled-components/btn-blue";
import { ButtonWhite } from "../../styled-components/btn-white";
import { CustomModal } from "../../components/custom-modal/custom-modal";
import { useMode } from "../../hooks/mode-hook";
import { RegistrationForm } from "../../components/forms/registration-form/registration-form";
import { LoginForm } from "../../components/forms/login-form/login-form";

const SignInPage: FC = () => {
  const {
    isMode: isActiveModalRegister,
    deactivateMode: onCloseModalRegister,
    activateMode: onOpenModalRegister,
  } = useMode();
  const {
    isMode: isActiveModalLogin,
    activateMode: onOpenModalLogin,
    deactivateMode: onCloseModalLogin,
  } = useMode();
  return (
    <div className="signIn_wrapper">
      <div className="left_side">
        <TwitterIcon
          sx={{ width: "260%", height: "260%" }}
          className="left_side__icon"
        />
        <ul className="left_side_navigation">
          <li className="left_side_navigation__item">
            <SearchIcon className="left_side_navigation__item__icon" />
            Читайте о том, что вам нравится
          </li>
          <li className="left_side_navigation__item">
            <PeopleOutlineIcon className="left_side_navigation__item__icon" />
            Узнайте, о чем говорят в мире
          </li>
          <li className="left_side_navigation__item">
            <FolderOpenIcon className="left_side_navigation__item__icon" />
            Присоеденяйтесь к общению
          </li>
        </ul>
      </div>
      <div className="right_side">
        <div className="rigth_side_info">
          <div className="rigth_side_info__icon_wrapper">
            <TwitterIcon
              sx={{ fontSize: "40px" }}
              className="rigth_side_info__icon"
            />
          </div>
          <div className="rigth_side_info__text">
            Узнайте, что <br /> просходит в мире <br /> прямо сейчас
          </div>
          <div className="rigth_side_info__description">
            Присоеденяйтесь к Твиттеру прямо сейчас!
          </div>
          <ButtonBlue
            onClick={onOpenModalRegister}
            sx={{ marginBottom: "20px" }}
          >
            Зарегистроваться
          </ButtonBlue>
          <ButtonWhite onClick={onOpenModalLogin}>Войти</ButtonWhite>
        </div>
      </div>
      {isActiveModalRegister && (
        <CustomModal
          isActiveModal={isActiveModalRegister}
          onCloseModal={onCloseModalRegister}
        >
          <div style={{ padding: "60px", minWidth: "350px" }}>
            <div>
              <RegistrationForm />
            </div>
          </div>
        </CustomModal>
      )}
      {isActiveModalLogin && (
        <CustomModal
          isActiveModal={isActiveModalLogin}
          onCloseModal={onCloseModalLogin}
        >
          <div style={{ padding: "60px", minWidth: "350px" }}>
            <div>
              <LoginForm />
            </div>
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export { SignInPage };
