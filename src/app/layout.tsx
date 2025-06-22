import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Javier Letort | Personal Website",
  description:
    "Personal website showcasing my professional experience, skills, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.4/dist/aos.css"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
        <Script
          src="https://unpkg.com/aos@2.3.4/dist/aos.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (typeof window !== "undefined") {
              const w = window as unknown as { AOS?: { init: () => void } };
              w.AOS?.init();
            }
          }}
        />
      </body>
    </html>
  );
}
