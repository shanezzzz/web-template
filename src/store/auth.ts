import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "@/types/store";
import axios from "@/lib/axios";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      updateUser: (userData) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        })),
      logout: () => {
        // 清除 token
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
        // 重置 axios 默认 header
        delete axios.defaults.headers.common["Authorization"];
        // 清除用户状态
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      // 选择性持久化
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
