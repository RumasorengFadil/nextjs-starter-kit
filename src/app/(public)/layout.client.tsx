"use client";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Navbar from "@/components/public/navbar";
import useLogout from "@/features/auth/hooks/use-logout.hook";
import { useAuth } from "@/hooks/use-auth.hook";

export default function PublicLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const {data:user} = useAuth();
  const {mutate} = useLogout();
console.log(user);
  return (
    <>
      <Navbar isLoggedIn={user?.isEmailVerified} currentPage={pathname} handleLogout={mutate} />
      {children}
    </>
  );
}
