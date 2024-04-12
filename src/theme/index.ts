import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import breakpoints from "./breakpoints";
import styles from "./global";

const customTheme = extendTheme({
  colors,
  config,
  components,
  breakpoints,
  styles,
});

export default customTheme;
