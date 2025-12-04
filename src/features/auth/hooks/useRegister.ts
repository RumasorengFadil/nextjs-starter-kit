import { registerUser } from "../api";
import { RegisterForm } from "../types";
import { useMutation } from '@tanstack/react-query';

export default function useRegister(){
    return useMutation({
        mutationFn: (payload:RegisterForm) => registerUser(payload),
        onError: (error: any) => {
        console.error("Register error:", error?.response?.data ?? error.message);
        },

        onSuccess: (data) => {
        console.log("Registered:", data);
        },
    })
}

