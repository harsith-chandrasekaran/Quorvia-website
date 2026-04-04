import type { Metadata } from "next";
import { Jura, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import NexoraFloat from "@/components/nexorafloat";
import "./globals.css";

const jura = Jura({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quorvia | Studio for Scaling",
  description:
    "Code-driven marketing, intelligent workflows, and premium frontends. We build engines, not just websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jura.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <NexoraFloat />
      </body>
    </html>
  );
}
