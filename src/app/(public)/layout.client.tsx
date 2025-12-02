"use client";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Navbar from "@/components/public/navbar";

export default function PublicLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar isLoggedIn={false} currentPage={pathname} />
      {children}
    </>
  );
}
