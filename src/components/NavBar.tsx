import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius="10px" src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
