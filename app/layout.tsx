import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "John Carl Honrado",
  description:
    "John Carl is a software developer building fast, accessible web applications with React, Next.js, TypeScript and Node.js.",
  openGraph: {
    title: "John Carl Honrado",
    description:
      "Portfolio of John Carl, a software developer focused on performance, scalability and clean UX.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#3B82F6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
        />
      </head>
      <body data-theme="light">{children}</body>
    </html>
  );
}
