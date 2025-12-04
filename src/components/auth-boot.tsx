"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/context/store/auth.store";
import { useAuth } from "@/hooks/use-auth.hook";

export default function AuthBoot() {
  const { data } = useAuth();
  const setUser = useAuthStore((s) => s.setUser);
  const setToken = useAuthStore((s) => s.setToken);

  useEffect(() => {
    async function loadSession() {
      try {
        if (data) {
          setUser(data);
        }
      } catch (e) {
        console.error(e);
        // ignore 401 (means not logged in)
      }
    }

    loadSession();
  }, [data]);

  return null;
}
