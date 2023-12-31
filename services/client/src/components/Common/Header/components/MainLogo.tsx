import { HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const MainLogo = () => {
    const websiteName = import.meta.env.VITE_APP_NAME;
    return (
        <NavLink to="/">
            <HStack align="center" h="full">
                <Text
                    fontSize={"30px"}
                    fontStyle={"normal"}
                    fontWeight={400}
                    lineHeight={"normal"}
                    letterSpacing={"7.5px"}
                    fontFamily={"logo"}
                >
                    {websiteName.toUpperCase()}
                </Text>
            </HStack>
        </NavLink>
    );
};

export default MainLogo;
