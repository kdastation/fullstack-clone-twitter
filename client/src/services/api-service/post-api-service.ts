import { ApiURLNames } from "./api-url-names";
import { upgradeAxios } from "./main-settings-api";
import { IPost } from "../../types/post/post";
import { PostsUserResponse } from "../../types/response/posts-user-response";
export class PostApiService {
  static async createPost(newPostData: FormData): Promise<IPost> {
    const receviedData = await upgradeAxios.post<IPost>(
      ApiURLNames.POST,
      newPostData
    );
    return receviedData.data;
  }
  static async getAllPosts(): Promise<IPost[]> {
    const response = await upgradeAxios.get<IPost[]>(ApiURLNames.POSTS);
    return response.data;
  }

  static async getPostsUser(): Promise<PostsUserResponse> {
    const response = await upgradeAxios.get(ApiURLNames.POSTS_USER);
    return response.data;
  }
}
