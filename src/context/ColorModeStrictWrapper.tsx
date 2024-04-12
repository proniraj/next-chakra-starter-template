import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import customTheme from "@/theme";

const ColorModeStrictWrapper = () => {
  return (
    <ColorModeScript
      initialColorMode={customTheme.config?.initialColorMode}
      type="cookie"
    />
  );
};

export default ColorModeStrictWrapper;
