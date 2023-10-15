import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/sliderCard.css";
import { Pagination } from "swiper/modules";
import a from "../../assets/spotify/1.png";
import b from "../../assets/spotify/2.png";
import c from "../../assets/spotify/3.png";
import d from "../../assets/spotify/4.png";
import border from "../../assets/Untitled-2.png";
import umamu from "../../assets/gif/seseren.gif";

export default function Spotify(props) {
  const images = [a, b, c, d];
  return (
    <>
      <Modal
        size={{ lg: "5xl", base: "sm" }}
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <ModalOverlay />
        <ModalContent bgColor={"#f0e4cd"} bgImg={border} bgSize={"100% 100%"}>
          <ModalHeader>
            <Flex>
              <Flex
                flex={1}
                borderRight={"4px solid white"}
                borderBottom={"4px solid white"}
                justify={"center"}
              >
                <Image src={umamu} w={{ lg: "95%", base: "100%" }} />
              </Flex>
              <Flex
                flex={5}
                justify={"space-evenly"}
                align={"center"}
                color={"#685a35"}
                fontSize={{ lg: "3em", base: "1em" }}
                fontFamily={`'Outfit Variable', sans-serif`}
                fontWeight={"bold"}
              >
                "Spotify"
                <Flex></Flex>
              </Flex>
            </Flex>

            <ModalCloseButton
              color={"white"}
              boxShadow="0 0 15px rgba(0, 0, 0, 0.2)"
              w={{ lg: "5%", base: "15%" }}
              size={"lg"}
              bgColor={"rgba(0, 0, 0, 0.7)"}
            />
          </ModalHeader>
          <ModalBody>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
              loop={true}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
