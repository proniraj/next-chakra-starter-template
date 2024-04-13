import { Box, Button, Text } from "@chakra-ui/react";
import SwitchTheme from "@/components/SwitchTheme";

export default function Home() {
  return (
    <Box>
      <Button>Hello</Button>
      <Text fontSize="2xl">Hello, world! k xa</Text>
      <SwitchTheme />
    </Box>
  );
}
