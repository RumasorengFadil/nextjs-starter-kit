import { useQuery } from "@tanstack/react-query";
import { loginGoogle } from "../api";

export function useLoginGoogle(){
    return useQuery({
        queryKey:["google"],
        queryFn: () => loginGoogle,
    })
}