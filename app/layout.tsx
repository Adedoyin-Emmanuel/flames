import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: "300" });

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
      <body className={bricolage.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
