"use client";

import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      colorScheme="teal"
      size="lg"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
};

export default SwitchTheme;
