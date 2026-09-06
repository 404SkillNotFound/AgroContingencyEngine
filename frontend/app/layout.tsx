import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroContingency Engine",
  description: "Climate resilience and mid-season crop planning for farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}