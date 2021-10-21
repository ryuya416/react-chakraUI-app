import { ChakraProvider, Button } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>ボタン</Button>
    </ChakraProvider>
  );
}
