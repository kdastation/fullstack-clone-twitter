import { Button, Paper } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../async-thunks/auth-async-thunks";
import { FormCreatePost } from "../../components/forms/form-create-post/form-create-post";
import { Post } from "../../components/post/post";
import { AuthSelector } from "../../redux/selectors/auth-selector";
import "./main-page.scss";

const MainPage: FC = () => {
  return (
    <Paper variant="outlined">
      <h3 className="title_main_page">Главная</h3>
      <div className="">
        <FormCreatePost />
      </div>
      <div>
        <Post />
      </div>
    </Paper>
  );
};

export { MainPage };
