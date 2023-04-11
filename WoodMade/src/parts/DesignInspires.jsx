import React from "react";
import text from "../assets/style/text";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ImageWrapper } from "../assets/style/styledComponent";
import { Link } from "react-router-dom";
import { inspiresImages } from "../constant/constant";
export default function DesignInspires() {
  return (
    <Box>
      <Flex direction="column" mx="1rem"> 
      <Text style={text.title}>İlham Veren Tasarım</Text>
      <Text style={text.normal}>
        İşinizi en iyi şekilde yapabilmek için hayalinizdeki çalışma alanını
        oluşturun.
      </Text>
        
      </Flex>
      
      <Box>
        <ImageWrapper>
          {inspiresImages.map((design) => (
            <Box  >
              <Link>
                <Image {...text.bigImage} src={design.src}></Image>
                <Text style={text.normal}>{design.alt}</Text>
              </Link>
            </Box>
          ))}
        </ImageWrapper>
      </Box>
    </Box>
  );
}
