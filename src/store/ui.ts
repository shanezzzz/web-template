import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UIState } from "@/types/store";
import { v4 as uuidv4 } from "uuid";

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: "system",
      language: "en",
      isLoading: false,
      toasts: [],

      setTheme: (theme) => set({ theme }),
      setLanguage: (lang) => set({ language: lang }),
      setLoading: (loading) => set({ isLoading: loading }),

      addToast: (type, message) =>
        set((state) => ({
          toasts: [
            ...state.toasts,
            {
              id: uuidv4(),
              type,
              message,
            },
          ].slice(-5), // 只保留最近的5条消息
        })),

      removeToast: (id) =>
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id),
        })),
    }),
    {
      name: "ui-storage",
      // 只持久化主题和语言设置
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
    }
  )
);
