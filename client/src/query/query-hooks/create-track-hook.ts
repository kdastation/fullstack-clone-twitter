import { useMutation, useQueryClient } from "react-query";
import { TracksApiService } from "../../services/api-service/tracks-api-service";
import { ITrack } from "../../types/track-model";

export const useCreateTrackQuery = (callbackSucces: () => void) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(TracksApiService.createTrack, {
    onSuccess: (newTrack) => {
      queryClient.setQueryData<ITrack[]>("tracksUser", (oldTracks) => {
        callbackSucces();
        return oldTracks ? [...oldTracks, newTrack] : [newTrack];
      });
    },
  });
  return {
    createTrack: mutateAsync,
    isLoading,
  };
};
