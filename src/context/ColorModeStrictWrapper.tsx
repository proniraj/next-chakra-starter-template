import customTheme from "@/theme";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";

const ColorModeStrictWrapper = () => {
  return (
    <ColorModeScript
      initialColorMode={customTheme.config?.initialColorMode}
      type="cookie"
    />
  );
};

export default ColorModeStrictWrapper;
