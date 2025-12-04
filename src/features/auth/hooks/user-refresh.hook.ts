import { useMutation, useQueryClient } from "@tanstack/react-query";
import { refreshToken } from "../api";

export function useRefreshUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: refreshToken,
    onSuccess: (user) => {
      queryClient.setQueryData(["me"], user);
    },
  });
}