import { useState, useEffect } from "react";
import { Container, Flex, HStack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

import DataForm from "../components/DataForm/DataForm";
import { useAppSelector } from "../app/hooks";
import { counterSelector } from "../rtk/slices/counter.slice";

const HomePage = () => {
  const { value } = useAppSelector(counterSelector);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [value]);
  return (
    <Flex w="full" h="full">
      <Container h="full" maxW="1200px">
        <HStack w="full" h="full">
          <Flex w="400px">
            <DataForm />
          </Flex>
          <Flex flex="1" h="full" position="relative">
            <Box
              position={"absolute"}
              top="48%"
              left="230px"
              maxW="500px"
              p="4"
              bg="whiteAlpha.300"
              border="1px solid #ccc"
              borderRadius={"10px"}
              _before={{
                content: '""',
                position: "absolute",
                top: "50%",
                left: "-15px",
                transform: "translateY(-50%)",
                borderWidth: "15px 15px 15px 0",
                borderStyle: "solid",
                borderColor: `transparent #ccc transparent transparent`,
              }}
            >
              {value ? (
                <motion.div
                  key={animationKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.p>{`Your appliances energy about `}</motion.p>
                  <motion.p style={{ color: "red" }}>{`${value.toFixed(
                    2
                  )} Wh.`}</motion.p>
                </motion.div>
              ) : (
                <Text>{`Let me forecast the energy consumption level that your house will utilize based on the data you provide.`}</Text>
              )}
            </Box>
          </Flex>
        </HStack>
      </Container>
    </Flex>
  );
};

export default HomePage;
