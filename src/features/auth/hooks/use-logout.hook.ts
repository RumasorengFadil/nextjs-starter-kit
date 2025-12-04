import { useRouter } from "next/navigation";
import { logout } from "../api";
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useLogout(){
    const router = useRouter();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => logout(),
        onError: (error: any) => {
            console.error("Register error:", error?.response?.data ?? error.message);
        },

        onSuccess: (data) => {
            queryClient.setQueryData(["me"], null);
            router.replace("/");
            console.log("Registered:", data);
        },
    })
}

