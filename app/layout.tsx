import type { Metadata } from "next";
import "./globals.css";
import { PHProvider, PostHogPageView } from "./providers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Artur Ferreira - Full-Stack Developer",
  description:
    "Portfolio of Artur Ferreira, 3rd year apprentice at CKW AG / Axpo Group. Full-stack developer working with Microsoft technologies, specializing in .NET, C#, Vue.js, and real-time applications. Graduating August 2027.",
  keywords: [
    "Artur Ferreira",
    "Portfolio",
    "Full Stack Developer",
    "Informatiker",
    "Applikationsentwickler",
    "CKW AG",
    "Axpo Group",
    "Microsoft",
    ".NET",
    "C#",
    "ASP.NET",
    "Vue.js",
    "MSSQL",
    "WebSocket",
    "Real-time Applications"
  ],
  authors: [{ name: "Artur Ferreira", url: "https://arturf.ch" }],
  creator: "Artur Ferreira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arturf.ch",
    title: "Artur Ferreira - Full-Stack Developer",
    description: "Full-stack developer portfolio showcasing Microsoft technologies and modern web applications",
    siteName: "Artur Ferreira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Ferreira - Full-Stack Developer",
    description: "Full-stack developer working with Microsoft technologies",
  },
  metadataBase: new URL("https://arturf.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white">
        <PHProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
