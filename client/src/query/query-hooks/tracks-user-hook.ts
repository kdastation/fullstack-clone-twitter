import { useQuery } from "react-query";
import { TracksApiService } from "../../services/api-service/tracks-api-service";
export const useTracksUserQuery = () => {
  const {
    isLoading,
    data: tracks,
    error,
  } = useQuery("tracksUser", TracksApiService.getTracksUser);
  return {
    isLoading,
    tracks,
    error,
  };
};
