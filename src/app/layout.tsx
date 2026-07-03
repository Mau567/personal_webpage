import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Mauricio Javier Letort | Personal Website",
  description:
    "Personal website showcasing my professional experience, skills, and projects",
  icons: {
    icon: "/favicon-m.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${archivo.variable} ${newsreader.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
