import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image borderRadius="10px" src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
