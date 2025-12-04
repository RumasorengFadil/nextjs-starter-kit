import { me } from "@/features/auth/api";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
    return useQuery({
        queryKey : ["me"],
        queryFn: me,
        staleTime: 5 * 60 * 1000, // cache 5 menit
        retry: 1,
    })
}