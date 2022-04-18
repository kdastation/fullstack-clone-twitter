import { Paper } from "@mui/material";
import { FC } from "react";
import { usePostsUserQuery } from "../../query/query-hooks/posts-user-hook";
import { renderPost } from "../../services/component-render-service/render-post";
import { List } from "../../utils-components/list/list";
import "./posts-user-page.scss";

const PostsUserPage: FC = () => {
  const { isLoading, error, posts, count, isError } = usePostsUserQuery();

  return (
    <div>
      {!isError && (
        <Paper>
          <div>
            <div className="posts_page_top">
              <h3 className="posts_page_top__title">Ваши посты</h3>
              <div className="posts_page_top__count">
                У вас <span>{count}</span> постов
              </div>
            </div>
            {posts && <List items={posts} renderItem={renderPost} />}
          </div>
        </Paper>
      )}
    </div>
  );
};

export { PostsUserPage };
