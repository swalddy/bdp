import type { Metadata, Viewport } from "next";
import { Dancing_Script, Lato } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Ulang Tahun Opung ke-80",
  description: "Kami mengundang kamu merayakan ulang tahun Opung yang ke-80",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dancingScript.variable} ${lato.variable} antialiased`}>
      <body className="min-h-screen bg-stone-300">{children}</body>
    </html>
  );
}
