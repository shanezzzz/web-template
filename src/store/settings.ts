import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SettingsState } from "@/types/store";

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: {
        notifications: true,
        emailUpdates: true,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        dateFormat: "YYYY-MM-DD",
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: {
            ...state.settings,
            ...newSettings,
          },
        })),
    }),
    {
      name: "settings-storage",
    }
  )
);
