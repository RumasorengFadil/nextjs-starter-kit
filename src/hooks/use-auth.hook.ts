import { me } from "@/features/auth/api";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
    return useQuery({
        queryKey : ["me"],
        queryFn: me
    })
}