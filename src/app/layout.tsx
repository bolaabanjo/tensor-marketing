import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: { absolute: "Tensor | Agentic Development Environment" },
  description:
    "Cencori's advanced self-improving development environment for engineers. It helps you build, brainstorm, and iterate like a colleague, friend, and employee — for everyone, everywhere.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-white text-black [color-scheme:light]">
        {children}
      </body>
    </html>
  );
}
