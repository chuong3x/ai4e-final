import { Text, HStack, Container } from "@chakra-ui/react";
import { DateTime } from "luxon";

const Footer = () => {
    return (
        <HStack
            as="footer"
            zIndex="99"
            w="full"
            h="32px"
            justify={"space-between"}
            align="center"
            bg="blackAlpha.800"
        >
            <Container
                display={"flex"}
                maxW={"1200px"}
                h="full"
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Text>{`© ${
                    DateTime.now().year
                } ${import.meta.env.VITE_APP_NAME.toUpperCase()}`}</Text>
                <Text>Welcome!</Text>
            </Container>
        </HStack>
    );
};
export default Footer;
