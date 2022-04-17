import { MemoPost } from "../../components/post/post";
import { IPost } from "../../types/post/post";

export const renderPost = (post: IPost) => {
  return <MemoPost postData={post} key={post.id} />;
};
