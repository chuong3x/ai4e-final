import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import DataForm from "../components/DataForm/DataForm";

const HomePage = () => {
    return (
        <Flex w="full" h="full">
            <Container h="full" maxW="1200px">
                <HStack w="full" h="full">
                    <Flex w="400px">
                        <DataForm />
                    </Flex>
                    <Flex flex="1">
                        <Text>Predict result</Text>
                    </Flex>
                </HStack>
            </Container>
        </Flex>
    );
};

export default HomePage;
