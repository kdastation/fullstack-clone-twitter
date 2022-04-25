import { Paper } from "@mui/material";
import { FC } from "react";
import { usePostsUserQuery } from "../../query/query-hooks/posts-user-hook";
import { renderPost } from "../../services/component-render-service/render-post";
import { List } from "../../utils-components/list/list";
import { PostsUserPageLoader } from "../../utils-components/loaders/posts-user-page-loaders/posts-user-page-loader/posts-user-page-loader";
import { WrapperLoaderError } from "../../utils-components/wrapper-loader-error/wrapper-loader-error";
import "./posts-user-page.scss";

const PostsUserPage: FC = () => {
  const { isLoading, posts, count, isError } = usePostsUserQuery();
  const isHasData = posts && posts.length > 0;
  return (
    <div>
      <WrapperLoaderError
        isError={isError}
        isLoading={isLoading}
        Loader={PostsUserPageLoader}
      >
        <Paper>
          <div>
            <div className="posts_page_top">
              <h3 className="posts_page_top__title">Ваши посты</h3>
              <div className="posts_page_top__count">
                У вас <span>{count}</span> постов
              </div>
            </div>
            {isHasData && <List items={posts} renderItem={renderPost} />}
          </div>
        </Paper>
      </WrapperLoaderError>
    </div>
  );
};

export { PostsUserPage };
