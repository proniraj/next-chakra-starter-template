"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider as Chakra,
  cookieStorageManager,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import customTheme from "@/theme";

// Lazy load the ColorModeStrictWrapper - this is a workaround for a bug in Chakra
const ColorModeStrictWrapper = dynamic(
  () => import("@/context/ColorModeStrictWrapper"),
  { ssr: false },
);

type Props = {
  children: React.ReactNode;
};

const ChakraProvider: FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <ColorModeStrictWrapper />
      <Chakra colorModeManager={cookieStorageManager} theme={customTheme}>
        {children}
      </Chakra>
    </CacheProvider>
  );
};

export default ChakraProvider;
