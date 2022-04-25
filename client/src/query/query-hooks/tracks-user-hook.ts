import { useQuery } from "react-query";
import { TracksApiService } from "../../services/api-service/tracks-api-service";
export const useTracksUserQuery = () => {
  const {
    isLoading,
    data: tracks,
    error,
    isError,
  } = useQuery("tracksUser", TracksApiService.getTracksUser, {
    retry: 0,
  });
  return {
    isLoading,
    tracks,
    error,
    isError,
  };
};
