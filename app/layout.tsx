import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackMCSTX",
  description: "的有9些也是非不",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/hacklogo.ico" sizes="any" />
      <body
      >
        {children}
      </body>
    </html>
  );
}
