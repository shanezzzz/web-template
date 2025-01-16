declare namespace NodeJS {
  interface ProcessEnv {
    // App
    NEXT_PUBLIC_APP_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';

    // Authentication
    NEXTAUTH_URL?: string;
    NEXTAUTH_SECRET?: string;

    // API Keys
    NEXT_PUBLIC_API_URL: string;

    // Database
    DATABASE_URL?: string;

    // External Services
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string;
    NEXT_PUBLIC_SENTRY_DSN?: string;

    // Feature Flags
    NEXT_PUBLIC_FEATURE_FLAG_EXAMPLE?: string;

    // Cache
    REDIS_URL?: string;

    // Email
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_USER?: string;
    SMTP_PASSWORD?: string;
    SMTP_FROM?: string;

    // Storage
    STORAGE_BUCKET?: string;
    STORAGE_REGION?: string;
    STORAGE_ACCESS_KEY?: string;
    STORAGE_SECRET_KEY?: string;
  }
}
