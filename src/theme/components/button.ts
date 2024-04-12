import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 2,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 3,
    },
    lg: {
      fontSize: "lg",
      px: 8,
      py: 4,
    },
  },
  variants: {
    primary: {
      bg: "blue.500",
      color: "white",
      _hover: {
        bg: "blue.600",
      },
    },
    secondary: {
      bg: "gray.300",
      _hover: {
        bg: "gray.400",
      },
    },
    brand: {
      bg: "teal.500",
      color: "white",
      _hover: {
        bg: "teal.600",
      },
    },
  },
};
