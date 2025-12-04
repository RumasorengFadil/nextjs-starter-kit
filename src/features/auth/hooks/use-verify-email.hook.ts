import { useQuery } from "@tanstack/react-query";
import { verifyEmail } from "../api";

export function useVerifyEmail(token: string){
    return useQuery({
        queryKey:["verify-email", token],
        queryFn: () => verifyEmail(token),
        enabled: !!token,
    })
}