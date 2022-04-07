import { ApiURLNames } from "./api-url-names";
import { upgradeAxios } from "./main-settings-api";
import { IPost } from "../../types/post/post";
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
}
