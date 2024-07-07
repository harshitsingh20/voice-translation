import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
"title": "Voice Translate: Advanced Language Tool",
  "description": "Bridging Voices, Connecting Worlds."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="./node_modules/preline/dist/preline.js"></script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}