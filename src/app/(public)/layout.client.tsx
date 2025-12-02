"use client";
import { ReactNode } from "react";

import { usePathname } from "next/navigation";

import Navbar from "@/components/public/navbar";

export default function PublicLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const unused = 1;
  return (
    <>
      <Navbar isLoggedIn={false} currentPage={pathname} />
      {children}
    </>
  );
}
