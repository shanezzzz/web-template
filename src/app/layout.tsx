import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    template: "%s | Your App Name",
    default: "Your App Name - A Professional Web Application",
  },
  description:
    "A professional web application template with enterprise-grade features",
  keywords: ["Next.js", "React", "TypeScript", "Enterprise", "Web Application"],
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "Your App Name",
    title: "Your App Name - A Professional Web Application",
    description:
      "A professional web application template with enterprise-grade features",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Your App Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your App Name",
    description:
      "A professional web application template with enterprise-grade features",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`],
    creator: "@yourtwitter",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Your App Name",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
