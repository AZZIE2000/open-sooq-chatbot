import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Open Sooq Demo</title>
        <meta name="description" content="Chat bot for open sooq" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
