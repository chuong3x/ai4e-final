/* eslint-disable react-refresh/only-export-components */
import { Container, Flex } from "@chakra-ui/react";

import MainLogo from "./components/MainLogo";
import MainNavbar from "./components/MainNavbar";

const Header = () => {
    return (
        <Flex
            as="header"
            zIndex="99"
            w="full"
            h="48px"
            // mt="18px"
            align="center"
            justify="space-between"
            bg="blackAlpha.800"
        >
            <Container
                display={"flex"}
                maxW={"1200px"}
                h="full"
                justifyContent={"space-between"}
            >
                <MainLogo />
                <MainNavbar />
            </Container>
        </Flex>
    );
};
export default Header;
