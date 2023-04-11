import { Box, Button, Flex, Image,Link, Text } from "@chakra-ui/react";
import React from "react";

import { computer } from "../assets/png";
import text from "../assets/style/text";

export default function Inspiration() {
  return (
    <Flex
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
      h="100%"
    >
      <Image
        src={computer}
        mt="3rem"
        width="100%"
        h="auto"
        objectFit="cover"
      ></Image>
      <Text
        fontSize="150%"
        m="auto"
        position="absolute"
        color="white"
        {...text.title}
      >
        En iyiler ilham alır
      </Text>
    
      
       
    </Flex>
  );
}
