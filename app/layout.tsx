// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3geE | Game Developer & Specialist",
  description: "Independent game developer, Minecraft specialist, and mechanic architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#050505] text-gray-200">
        {children}
      </body>
    </html>
  );
}
