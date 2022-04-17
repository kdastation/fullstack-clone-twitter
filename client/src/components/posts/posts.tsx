import { FC } from "react";
import { usePostsQuery } from "../../query/query-hooks/posts-hook";
import { renderPost } from "../../services/component-render-service/render-post";
import { List } from "../../utils-components/list/list";

const Posts: FC = () => {
  const { posts, isLoading, isError } = usePostsQuery();

  return <div>{posts && <List items={posts} renderItem={renderPost} />}</div>;
};

export { Posts };
