import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import styles from "./global";

const customTheme = extendTheme({
  colors,
  config,
  components,
  breakpoints,
  styles,
});

export default customTheme;
