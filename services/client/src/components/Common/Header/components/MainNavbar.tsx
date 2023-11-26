import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <HStack as="nav" h="full" align="center" fontFamily={"navbar"}>
      <NavLink to="https://www.facebook.com/nttuan8.AI4E">
        {({ isActive }) => (
          <Button colorScheme="whiteAlpha" variant="nav" isActive={isActive}>
            Fan Page
          </Button>
        )}
      </NavLink>
    </HStack>
  );
};
export default MainNavbar;
