import { ColorModeScript } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import ChakraProvider from "@/context/ChakraProvider";
import customTheme from "@/theme";
import clsx from "@/utils/clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chakra UI Next.js Starter",
  description: "A starter template for Chakra UI and Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorMode =
    cookies().get("chakra-ui-color-mode")?.value ||
    customTheme.config?.initialColorMode;

  return (
    <html
      lang="en"
      data-theme={colorMode}
      style={{
        colorScheme: colorMode,
      }}
    >
      <body className={clsx([inter.className, `chakra-ui-${colorMode}`])}>
        <ColorModeScript initialColorMode={colorMode} type="cookie" />
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
