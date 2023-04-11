import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import text from "../assets/style/text";

const pageUp = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <Box>
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Link {...text.MyLogoNormal} href={"#"}>
              Hakkımızda
            </Link>
            <Link {...text.MyLogoNormal} href={"#"}>
              Blog
            </Link>
            <Link {...text.MyLogoNormal} href={"#"}>
              Sipariş Durumu
            </Link>
            <Link {...text.MyLogoNormal} href={"#"}>
              İletişim
            </Link>
          </Stack>
          <Stack align={"flex-end"}>
            <HStack>
              <Button
                w="40px"
                h="40px"
                bg="gray"
                color="white"
                borderRadius={0}
                onClick={() => pageUp()}
              >
                <Box as="span" fontWeight="bold" fontSize="lg">
                  Çık
                </Box>
              </Button>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"}>
        <Container
          as={Stack}
          maxW={"7xl"}
          py={3}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text {...text.MyLogoNormal}>
            © 2023 WooD Company. Tüm hakları saklıdır.
          </Text>
          <Flex align={"flex-end"} py={3}>
            <Link {...text.MyLogoNormal} px={3}>
              Kullanım Koşulları
            </Link>
            <Link {...text.MyLogoNormal} px={3}>
              Gizlilik
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
