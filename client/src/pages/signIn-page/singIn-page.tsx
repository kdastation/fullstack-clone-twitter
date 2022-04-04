import { FC } from "react";
import "./sign-in-page.scss";
import SearchIcon from "@mui/icons-material/Search";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { ButtonBlue } from "../../styled-components/btn-blue";
import { ButtonWhite } from "../../styled-components/btn-white";

const SignInPage: FC = () => {
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
          <ButtonBlue sx={{ marginBottom: "20px" }}>
            Зарегистроваться
          </ButtonBlue>
          <ButtonWhite>Войти</ButtonWhite>
        </div>
      </div>
    </div>
  );
};

export { SignInPage };
