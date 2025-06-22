import type { Metadata } from "next";
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
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
