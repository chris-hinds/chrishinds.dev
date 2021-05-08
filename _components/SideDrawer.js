// UI
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const SideDrawer = ({ isOpen, onClose, btnRef, navigation }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Header</DrawerHeader>

        <DrawerBody>{navigation}</DrawerBody>

        <DrawerFooter>Footer</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
