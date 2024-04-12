import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChakraProvider from "@/context/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chakra UI Next.js Starter",
  description: "A starter template for Chakra UI and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
