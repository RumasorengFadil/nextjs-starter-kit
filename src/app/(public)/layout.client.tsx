"use client";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Navbar from "@/components/public/navbar";
import { useAuthStore } from "@/context/store/auth.store";

export default function PublicLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const auth = useAuthStore();
  return (
    <>
      <Navbar isLoggedIn={auth.isAuthenticated} currentPage={pathname} />
      {children}
    </>
  );
}
