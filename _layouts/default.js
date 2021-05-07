// chakra-ui
import { Container } from "@chakra-ui/react";

// components
import Header from "@components/Header";

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <Container as="main" maxWidth="container.lg">
      {children}
    </Container>
  </>
);

export default DefaultLayout;
