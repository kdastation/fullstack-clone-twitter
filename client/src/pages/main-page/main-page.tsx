import { Paper } from "@mui/material";
import { FC } from "react";
import { FormCreatePost } from "../../components/forms/form-create-post/form-create-post";
import { Posts } from "../../components/posts/posts";
import "./main-page.scss";

const MainPage: FC = () => {
  return (
    <Paper variant="outlined">
      <h3 className="title_main_page">Главная</h3>
      <div className="">
        <FormCreatePost />
      </div>
      <div>
        <Posts />
      </div>
    </Paper>
  );
};

export { MainPage };
