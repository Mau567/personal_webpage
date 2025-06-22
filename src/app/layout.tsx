import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {children}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">{`AOS.init();`}</Script>
      </body>
    </html>
  );
}
