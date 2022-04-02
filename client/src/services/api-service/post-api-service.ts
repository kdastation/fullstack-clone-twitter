import { ApiURLNames } from "./api-url-names";
import { upgradeAxios } from "./main-settings-api";
import { IPost } from "../../models/post/post";
export class PostApiService {
  static async createPost(newPostData: FormData): Promise<IPost> {
    const receviedData = await upgradeAxios.post<IPost>(
      ApiURLNames.POST,
      newPostData
    );
    return receviedData.data;
  }
}
