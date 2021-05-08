import { useRef } from "react";

// UI
import { Box, Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Components
import SideDrawer from "@components/SideDrawer";
import Navigation from "@components/Navigation";

// Nav Items
const LINKS = [
  { label: "About Me", path: "/about" },
  { label: "Posts", path: "/posts" },
  { label: "Get In Touch", path: "/contact" },
];

const NavigationComponent = () => <Navigation navItems={LINKS} />;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuBtnRef = useRef();

  return (
    <>
      <Flex padding={4} justify="space-between" alignItems="center">
        <Box>
          <Text fontWeight="extrabold" fontSize="xl">
            Chris Hinds.
          </Text>
        </Box>
        <Box>
          <Box display={{ base: "none", md: "block" }}>
            <NavigationComponent />
          </Box>

          <IconButton
            ref={menuBtnRef}
            onClick={onOpen}
            aria-label="Open Menu"
            variant="ghost"
            size="lg"
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon />}
          />
        </Box>
      </Flex>
      <SideDrawer
        isOpen={isOpen}
        onClose={onClose}
        btnRef={menuBtnRef}
        navigation={<NavigationComponent />}
      />
    </>
  );
};

export default Header;
