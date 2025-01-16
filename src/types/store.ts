// 用户相关类型
export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  avatar?: string;
  role: "admin" | "user";
  permissions: string[];
}

// 认证状态
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

// 全局 UI 状态
export interface UIState {
  theme: "light" | "dark" | "system";
  language: string;
  isLoading: boolean;
  toasts: Array<{
    id: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
  }>;
  setTheme: (theme: UIState["theme"]) => void;
  setLanguage: (lang: string) => void;
  setLoading: (loading: boolean) => void;
  addToast: (type: UIState["toasts"][number]["type"], message: string) => void;
  removeToast: (id: string) => void;
}

// 应用配置状态
export interface SettingsState {
  settings: {
    notifications: boolean;
    emailUpdates: boolean;
    timezone: string;
    dateFormat: string;
  };
  updateSettings: (settings: Partial<SettingsState["settings"]>) => void;
}

// 缓存项类型
export interface CacheItem<T = unknown> {
  data: T;
  timestamp: number;
  ttl: number;
}

// API 缓存状态
export interface CacheState {
  cache: Map<string, CacheItem>;
  getCacheItem: <T>(key: string) => T | null;
  setCacheItem: <T>(key: string, data: T, ttl?: number) => void;
  clearCache: () => void;
}
