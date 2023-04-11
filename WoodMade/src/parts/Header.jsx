import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Stack,
  Image,
  Box,
  Text,
  Flex,
  Container,
  SimpleGrid,
  AbsoluteCenter,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import text from "../assets/style/text";


export default function Header() {
  
   const [fix, setFix] = useState(false);
   const [fixText, setFixText] = useState(true);

   function setFixed() {
    if (window.scrollY >= 680) {
      setFix(true);
    } 
    else if (window.scrollY >= 5){
      setFix(false);
      setFixText(false)
    }
    else{
      setFix(false);
      setFixText(true)
    }
  }
  
  window.addEventListener("scroll", setFixed);
  return (
    <Box
      h="1rem"
      w="100%"
      {...(fix ? { ...text.headerDisabled } : { ...text.headerActive })}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={3}
        my="0.5rem"
        direction={{ base: "row", md: "row" }}
        spacing={50}
        justify={{ sm: "center", md: "space-between" }}
        align={{ sm: "center", md: "center" }}
      >
        <Stack direction="row" rowGap={50}>
          <Text {...(fixText ? { ...text.MyLogoNormal } : { ...text.MyLogoHeaderActive })} align={"flex-start"}>
            Mağaza
          </Text>

          <Text {...(fixText ? { ...text.MyLogoNormal } : { ...text.MyLogoHeaderActive })} align={"flex-start"}>
            Keşfet
          </Text>
        </Stack>

        <Stack direction="row">
          <Text {...(fixText ? { ...text.MyLogoNormal } : { ...text.MyLogoHeaderActive })}>Sepet</Text>
        </Stack>
      </Container>
    </Box>
  );
}
