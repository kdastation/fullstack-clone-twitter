import { TracksUserResponse } from "../../types/response/tracks-user-response";
import { ITrack } from "./../../types/track-model";
import { ApiURLNames } from "./api-url-names";
import { upgradeAxios } from "./main-settings-api";

export class TracksApiService {
  static async getTracksUser(): Promise<ITrack[]> {
    const response = await upgradeAxios.get<TracksUserResponse>(
      ApiURLNames.TRACKS_USER
    );
    return response.data.tracks;
  }

  static async createTrack(trackData: FormData): Promise<ITrack> {
    const response = await upgradeAxios.post<ITrack>(
      ApiURLNames.TRACK,
      trackData
    );
    return response.data;
  }
}
