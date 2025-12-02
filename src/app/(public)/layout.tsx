import { ReactNode } from "react";

import PublicLayoutClient from "./layout.client";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <PublicLayoutClient>{children}</PublicLayoutClient>;
}
