import React from "react";
import text from "../assets/style/text";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { featuredImages } from "../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import  {SwiperWrapper} from "../assets/style/styledComponent";
import "swiper/css";
import "swiper/css/free-mode";

export default function FeaturedProducts() {
  return (
    <Box>
      
      <SwiperWrapper>
      <Text style={text.title}>Öne Çıkanlar</Text>
      <Text style={text.normal}>
       En yakın zamanda trend olan ürünlerimiz
      </Text>
        <Box>
          <Swiper
            freeMode={true}
            grabCursor={true}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1048: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {featuredImages.map((design) => (
              <SwiperSlide>
                <Link>
                  <Image {...text.mediumImage} src={design.src}></Image>
                  <Text style={text.normal}>{design.alt}</Text>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </SwiperWrapper>
    </Box>
  );
}
