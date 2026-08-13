import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAMBOO | Publishing, Culture & TEEBOT",
  description: "A bilingual platform for publishing, cultural export, PAMBOO bookstores and TEEBOT educational IP.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
