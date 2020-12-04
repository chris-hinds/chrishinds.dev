// chakra-ui
import { Box } from "@chakra-ui/react";

// components

const DefaultLayout = ({ children }) => (
  <Box w="100%" p={4}>
    {children}
  </Box>
);

export default DefaultLayout;
