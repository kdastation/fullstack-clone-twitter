import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { ButtonBlue } from "../../styled-components/buttons/btn-blue";
import { ButtonWhite } from "../../styled-components/buttons/btn-white";
import { CustomModal } from "../../components/modals/custom-modal/custom-modal";
import { useMode } from "../../hooks/mode-hook";
import { RegistrationForm } from "../../components/forms/registration-form/registration-form";
import { LoginForm } from "../../components/forms/login-form/login-form";
import { FormModalContainer } from "../../components/modals/form-modal-container/form-modal-container";
import "./sign-in-page.scss";

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
          sx={{ width: "260%", height: "260%", color: "rgb(29, 161, 242)" }}
          className="left_side__icon"
        />
        <ul className="left_side_navigation">
          <li className="left_side_navigation__item">
            <SearchIcon
              color="secondary"
              className="left_side_navigation__item__icon"
            />
            Читайте о том, что вам нравится
          </li>
          <li className="left_side_navigation__item">
            <PeopleOutlineIcon
              color="secondary"
              className="left_side_navigation__item__icon"
            />
            Узнайте, о чем говорят в мире
          </li>
          <li className="left_side_navigation__item">
            <FolderOpenIcon
              color="secondary"
              className="left_side_navigation__item__icon"
            />
            Присоеденяйтесь к общению
          </li>
        </ul>
      </div>
      <div className="right_side">
        <div className="rigth_side_info">
          <div className="rigth_side_info__icon_wrapper">
            <TwitterIcon
              color="primary"
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
            Зарегистрироваться
          </ButtonBlue>
          <ButtonWhite onClick={onOpenModalLogin}>Войти</ButtonWhite>
        </div>
      </div>
      {isActiveModalRegister && (
        <CustomModal
          title="Зарегистрироваться"
          isActiveModal={isActiveModalRegister}
          onCloseModal={onCloseModalRegister}
        >
          <FormModalContainer Component={RegistrationForm} />
        </CustomModal>
      )}
      {isActiveModalLogin && (
        <CustomModal
          title="Войти"
          isActiveModal={isActiveModalLogin}
          onCloseModal={onCloseModalLogin}
        >
          <FormModalContainer Component={LoginForm} />
        </CustomModal>
      )}
    </div>
  );
};

export { SignInPage };
