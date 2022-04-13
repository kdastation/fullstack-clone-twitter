import { useMutation, useQueryClient } from "react-query";
import { TracksApiService } from "../../services/api-service/tracks-api-service";
import { ITrack } from "../../types/track-model";

export const useCreateTrackQuery = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(TracksApiService.createTrack, {
    onSuccess: (newTrack) => {
      queryClient.setQueryData<ITrack[]>("tracksUser", (oldTracks) => {
        return oldTracks ? [...oldTracks, newTrack] : [newTrack];
      });
    },
  });
  return {
    createTrack: mutateAsync,
    isLoading,
  };
};
