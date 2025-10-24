import type { Metadata } from "next";
import "./globals.css";
import { ScrollAnimations } from "@/components/scroll-animations";

export const metadata: Metadata = {
  title: "Artur Ferreira - Full-Stack Developer",
  description:
    "Portfolio of Artur Ferreira, 3rd year apprentice at CKW AG / Axpo Group. Full-stack developer specializing in Vue.js, PHP, Laravel, .NET, and real-time applications.",
  keywords: [
    "Artur Ferreira",
    "Portfolio",
    "Full Stack Developer",
    "Informatiker",
    "Applikationsentwickler",
    "CKW AG",
    "Axpo Group",
    "Vue.js",
    "PHP",
    "Laravel",
    ".NET",
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
    description: "Full-stack developer portfolio showcasing modern web applications and real-time solutions",
    siteName: "Artur Ferreira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artur Ferreira - Full-Stack Developer",
    description: "Full-stack developer portfolio showcasing modern web applications",
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
        {children}
        <ScrollAnimations />
      </body>
    </html>
  );
}
