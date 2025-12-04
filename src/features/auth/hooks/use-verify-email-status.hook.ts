import { VerificationStatus } from "../components/auth-verify-email";
import { useVerifyEmail } from "./use-verify-email.hook";


export function useVerifyEmailStatus(token: string): {
  status: VerificationStatus;
  isLoading: boolean;
} {
  const { data, error, isLoading } = useVerifyEmail(token);

  if (isLoading) return { status: "pending", isLoading };

  if (error) {
    return {
      status: error?.message === "Token expired" ? "expired" : "error",
      isLoading: false,
    };
  }

  return {
    status: data?.verified ? "verified" : "pending",
    isLoading: false,
  };
}
