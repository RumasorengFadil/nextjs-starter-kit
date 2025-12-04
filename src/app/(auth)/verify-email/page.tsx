"use client"
import AuthVerifyEmail from "@/features/auth/components/auth-verify-email";
import { useVerifyEmailStatus } from "@/features/auth/hooks/use-verify-email-status.hook";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const { isLoading, status } = useVerifyEmailStatus(token ?? "");
    return (
        <AuthVerifyEmail isLoading={isLoading} status={status} />
    )
}