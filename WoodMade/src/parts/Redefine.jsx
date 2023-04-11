import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import text from "../assets/style/text";

export default function Redefine() {
  return (
    <Flex
      bg="gray.600"
      h="10em"
      m="5em"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
      alignItems="center"
      height="10rem"
    >
      
      <Text
        fontSize="150%"
        m="auto"
        position="absolute"
        color="white"
        {...text.title}
      >
       Tasarım İlham Verir
      </Text>
    </Flex>
  );
}
