const requiredEnvVars = ['NEXT_PUBLIC_APP_URL', 'NEXT_PUBLIC_API_URL'] as const;

export function validateEnv() {
  const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingEnvVars
        .map(envVar => `- ${envVar}`)
        .join('\n')}\n\nPlease check your .env file.`
    );
  }
}

export function getEnvVar(key: keyof NodeJS.ProcessEnv, fallback?: string): string {
  const value = process.env[key];
  if (!value && !fallback) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || fallback || '';
}

// 常用环境变量
export const env = {
  isProd: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  appUrl: getEnvVar('NEXT_PUBLIC_APP_URL'),
  apiUrl: getEnvVar('NEXT_PUBLIC_API_URL'),
  featureFlags: {
    example: getEnvVar('NEXT_PUBLIC_FEATURE_FLAG_EXAMPLE', 'false') === 'true',
  },
} as const;
