import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import "./main-auth-form.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LoginForm } from "../login-form/login-form";
import { Button } from "@mui/material";
import { RegistrationForm } from "../registration-form/registration-form";

type typeForm = "LOGIN" | "REGISTRATION";

const MainAuthForm: FC = () => {
  const [typeForm, setTypeForm] = useState<typeForm>("LOGIN");
  return (
    <div className="main_auth_form_wrapper">
      <div className="auth_form_container">
        <div className="auth_form__title">Instagram</div>
        <div className="auth_form_container__text">
          Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </div>
        <div>
          <button className="auth_form_container__btn-link">
            <div className="btn-link__icon">
              <FacebookIcon sx={{ color: "white" }} />
            </div>
            <div className="btn-link__text">Войдите через facebook</div>
          </button>
        </div>
        <div>
          {typeForm === "LOGIN" ? (
            <LoginForm changeTypeForm={() => setTypeForm("REGISTRATION")} />
          ) : (
            <RegistrationForm changeTypeForm={() => setTypeForm("LOGIN")} />
          )}
        </div>
      </div>
    </div>
  );
};

export { MainAuthForm };
