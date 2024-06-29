import type { Metadata } from "next";
import { Ojuju } from "next/font/google";
import "./globals.css";

const inter = Ojuju({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flames",
  description:
    "Classic FLAMES game, which predicts the nature of a relationship between two individuals based on their names",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
