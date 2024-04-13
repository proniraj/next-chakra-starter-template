"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider as Chakra,
  cookieStorageManager,
} from "@chakra-ui/react";
import React, { FC } from "react";
import customTheme from "@/theme";

type Props = {
  children: React.ReactNode;
};

const ChakraProvider: FC<Props> = ({ children }) => {
  return (
    <CacheProvider>
      <Chakra
        colorModeManager={cookieStorageManager}
        theme={customTheme}
        resetCSS={true}
      >
        {children}
      </Chakra>
    </CacheProvider>
  );
};

export default ChakraProvider;
