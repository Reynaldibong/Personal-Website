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
import a from "../../assets/the cappa/1.png";
import b from "../../assets/the cappa/2.png";
import c from "../../assets/the cappa/3.png";
import d from "../../assets/the cappa/4.png";
import e from "../../assets/the cappa/5.png";
import f from "../../assets/the cappa/6.png";
import g from "../../assets/the cappa/7.png";
import sw from "../../assets/gif/silver-wolf-honkai.gif";
import border from "../../assets/Untitled-2.png";

export default function TheCappa(props) {
  const images = [a, b, c, d, e, f, g];
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
                <Image src={sw} w={{ lg: "100%", base: "80%" }} />
              </Flex>
              <Flex
                flex={5}
                justify={"space-evenly"}
                align={"center"}
                color={"#685a35"}
                fontSize={{ lg: "3em", base: "0.7em" }}
                fontFamily={`'Outfit Variable', sans-serif`}
                fontWeight={"bold"}
              >
                "The CAPPA"
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
