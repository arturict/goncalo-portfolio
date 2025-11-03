import type { Metadata } from "next";
import "./globals.css";
import { PHProvider } from "./providers";

export const metadata: Metadata = {
  title: "Gonçalo Torres Novo - Commercial Apprentice",
  description:
    "Portfolio of Gonçalo Torres Novo, 2nd year commercial apprentice at CALIDA AG in Emmen, Luzern, Switzerland. Specializing in retail operations, customer service, and business management. Graduating August 2026.",
  keywords: [
    "Gonçalo Torres Novo",
    "Portfolio",
    "Commercial Apprentice",
    "Kaufmann EFZ",
    "CALIDA AG",
    "Retail",
    "Customer Service",
    "Business Operations",
    "Emmen",
    "Luzern",
    "Switzerland"
  ],
  authors: [{ name: "Gonçalo Torres Novo" }],
  creator: "Gonçalo Torres Novo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goncalo-torres-novo.ch",
    title: "Gonçalo Torres Novo - Commercial Apprentice",
    description: "Commercial apprentice portfolio showcasing retail operations, customer service, and business skills",
    siteName: "Gonçalo Torres Novo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonçalo Torres Novo - Commercial Apprentice",
    description: "Commercial apprentice working in retail and business operations",
  },
  metadataBase: new URL("https://goncalo-torres-novo.ch"),
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
          {children}
        </PHProvider>
      </body>
    </html>
  );
}
