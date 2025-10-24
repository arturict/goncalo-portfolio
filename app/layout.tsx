import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artur Ferreira - Informatiker EFZ Applikationsentwickler",
  description:
    "Portfolio of Artur Ferreira, 3rd year apprentice at CKW AG / Axpo Group. Full-stack developer with experience in Vue.js, PHP, Laravel, .NET, and real-time applications.",
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
    "WebSocket"
  ],
  authors: [{ name: "Artur Ferreira" }],
  creator: "Artur Ferreira",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Artur Ferreira - Informatiker EFZ",
    description: "Full-stack developer portfolio showcasing projects and skills",
    siteName: "Artur Ferreira Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
