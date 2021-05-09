// UI
import { Flex, Link, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ label, path }) => (
  <Link
    href={path}
    paddingX={{ base: 0, md: 2 }}
    paddingY={{ base: 2, md: 0 }}
    _hover={{
      textDecoration: "none",
      fontWeight: "bold",
      color: useColorModeValue("brand.highlight3"),
      bg: { base: "none", md: "#f9f9f9" },
    }}
  >
    {label}
  </Link>
);

const Navigation = ({ navItems }) => (
  <Flex as="nav" direction={{ base: "column", md: "row" }}>
    {navItems.map((item, index) => (
      <NavLink
        key={`${index}-${item.label}`}
        label={item.label}
        path={item.path}
      />
    ))}
  </Flex>
);

export default Navigation;
