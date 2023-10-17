import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Icon,
  Center,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/Untitled-1.png";
import rey from "../assets/splash2.png";
import totoro from "../assets/totoro-jumping.gif";
import totoro2 from "../assets/totoro.gif";
import cappa1 from "../assets/the cappa/1.png";
import spotify1 from "../assets/spotify/1.png";
import ig1 from "../assets/ig/Untitled-1.png";
import { FiDownload } from "react-icons/fi";
import {
  BiCopyright,
  BiLogoChrome,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import "@fontsource/barlow-condensed";
import "@fontsource/ubuntu";
import "@fontsource/dm-serif-text";
import "@fontsource-variable/caveat";
import "@fontsource-variable/exo-2";
import "../styles/underlineNavbar.css";
import TheCappa from "./modal/theCappa";
import Spotify from "./modal/spotify";
import Instagram from "./modal/instagram";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import name from "../assets/font.png";

export default function Main() {
  const theCappa = useDisclosure();
  const spotify = useDisclosure();
  const instagram = useDisclosure();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* navbar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <Flex
          justify={"space-between"}
          px={"2%"}
          h={"60px"}
          w={"100%"}
          bgColor={"#fcfbf3"}
          fontFamily={`'Barlow-condensed', sans-serif`}
          borderBottom={"1px solid #dbdbdb"}
          pos={"fixed"}
        >
          <Link
            h={"100%"}
            href="#"
            _hover={{ textDecor: "none" }}
            className="nav-link"
          >
            <Image src={logo} maxH={"100%"}></Image>
          </Link>
          <Flex
            align={"center"}
            gap={{ lg: "4em", base: "2em" }}
            letterSpacing={"0.3em"}
            fontSize={{ lg: "0.9em", base: "0.6em" }}
          >
            <Link
              display={{ base: "none", lg: "flex" }}
              href="#"
              _hover={{ textDecor: "none" }}
              className="nav-link"
            >
              HOME
            </Link>
            <Link
              // display={{ base: "none", lg: "flex" }}
              display={"flex"}
              href="#about"
              _hover={{ textDecor: "none" }}
              className="nav-link"
            >
              ABOUT
            </Link>
            <Link
              href="#skills"
              _hover={{ textDecor: "none" }}
              className="nav-link"
            >
              SKILLS
            </Link>
            <Link
              href="#portfolio"
              _hover={{ textDecor: "none" }}
              className="nav-link"
            >
              PORTFOLIO
            </Link>
            <Link
              href="#contact"
              _hover={{ textDecor: "none" }}
              className="nav-link"
            >
              CONTACT
            </Link>
          </Flex>
        </Flex>
      </motion.div>

      {/* content */}
      <Flex
        pt={{ lg: "8%", base: "24%" }}
        display={{ lg: "flex", base: "block" }}
        bgColor={"#fcfbf3"}
      >
        <Flex flex={1} justify={"center"} align={"center"}>
          <Box w={"80%"}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ width: "1%" }}
            >
              <Flex
                borderBottom={"5px solid black"}
                w={{ lg: "15%", base: "50%" }}
                py={"1em"}
                my={"0.5em"}
              ></Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Text
                fontSize={{ lg: "2.5em", base: "1.5em" }}
                fontWeight={"bold"}
              >
                Hello, I am
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image src={name} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Text
                fontSize={{ lg: "1em", base: "0.7em" }}
                letterSpacing={"0.5em"}
                fontWeight={"bold"}
                color={"gray.400"}
                fontFamily={`'Outfit Variable', sans-serif`}
              >
                A FULLSTACK WEB DEVELOPER.
              </Text>
            </motion.div>
          </Box>
        </Flex>
        <Flex flex={1} pt={{ base: "1em", lg: 0 }} justify={"center"}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Flex
              justifyContent={"center"}
              w={"100%"}
              transition="transform 0.5s ease"
              _hover={{ transform: "translateY(-10px)" }}
            >
              <Image src={rey} w={"75%"} />
            </Flex>
          </motion.div>
        </Flex>
      </Flex>

      <Flex justify={"center"} bgColor={"#fcfbf3"} pb={"5%"}>
        <Flex w={"90%"} py={"3em"} justify={{ base: "center", lg: "normal" }}>
          <Link
            _hover={{ textDecor: "none" }}
            href="https://drive.google.com/file/d/1joJ0U6vXM75U7qWe5WOFl2lvNpZgL8xF/view?usp=drive_link"
          >
            <Button
              display={"flex"}
              gap={"0.5em"}
              variant={"ghost"}
              color={"#685a35"}
              borderRadius={"10em"}
              boxShadow="0 0 15px rgba(0, 0, 0, 0.2)"
              _hover={{ colorScheme: "#4d243d", transform: "translateY(-5px)" }}
              transition="transform 0.5s ease"
            >
              <Icon as={FiDownload} />
              Download CV
            </Button>
          </Link>
        </Flex>
      </Flex>

      {/* about */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Flex
          py={{ lg: "13.5em", base: "11.5em" }}
          id="about"
          flexDir={"column"}
          align={"center"}
          bgColor={"#f0e4cd"}
        >
          <Flex
            justify={"center"}
            color={"#685a35"}
            fontSize={"3em"}
            fontFamily={`'Caveat Variable', sans-serif`}
            fontWeight={"bold"}
            pb={"1em"}
          >
            ABOUT
          </Flex>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            border={"2px dashed white"}
            borderRadius={"1em"}
            w={"90%"}
          >
            <Flex
              flexDir={"column"}
              flex={1}
              align={"center"}
              borderRight={{ lg: "2px dashed white", base: "none" }}
              borderBottom={{ base: "2px dashed white", lg: "none" }}
              borderRadius={"1em"}
            >
              <Text
                fontSize={{ lg: "3em", base: "1.5em" }}
                fontWeight={"bold"}
                color={"#685a35"}
              >
                Rey,
              </Text>
              <Image
                mr={{ lg: "2em", base: "0.5em" }}
                w={{ lg: "50%", base: "45%" }}
                src={totoro}
              ></Image>
            </Flex>
            <Flex flex={2} justify={"center"} align={"center"}>
              <Flex
                w={{ lg: "70%", base: "90%" }}
                h={"70%"}
                justify={{ lg: "center" }}
                align={"center"}
                fontSize={{ lg: "1.5em", base: "1.2em" }}
                py={{ base: "1em", lg: 0 }}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                "Highly enthusiastic about challenges and learning new things,
                such as coding. Enjoy creating unique and efficient user
                interface designs for applications, ready to collaborate with a
                team, and always open to constructive criticism to improve
                oneself."
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>

      {/* skills */}
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Flex
          id="skills"
          flexDir={"column"}
          align={"center"}
          py={{ lg: "12em", base: "12em" }}
          bgColor={"#fcfbf3"}
        >
          <Flex
            justify={"center"}
            fontSize={"3em"}
            fontFamily={`'Caveat Variable', sans-serif`}
            fontWeight={"bold"}
            color={"#685a35"}
            pb={"1em"}
          >
            SKILLS
          </Flex>
          <Flex
            h={"150px"}
            bgColor={"#e4ddcd"}
            borderRadius={"0.5em"}
            w={{ lg: "70%", base: "90%" }}
            align={"center"}
            justify={"space-around"}
            fontFamily={`'Exo 2 Variable', sans-serif`}
            color={"white"}
            fontSize={{ lg: "2em", base: "1.2em" }}
            boxShadow="inset 0 0px 7px rgba(0, 0, 0, 1)"
          >
            <Center
              w={"30%"}
              h={"70%"}
              borderRadius={"1em"}
              bgColor={"#918430"}
              boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
            >
              Front-end
            </Center>
            <Center
              w={"30%"}
              h={"70%"}
              borderRadius={"1em"}
              bgColor={"#685a35"}
              boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
            >
              Back-end
            </Center>

            <Center
              w={"30%"}
              h={"70%"}
              borderRadius={"1em"}
              bgColor={"#332802"}
              boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
            >
              Others
            </Center>
          </Flex>

          <Flex
            borderRadius={"0.5em"}
            w={{ lg: "70%", base: "90%" }}
            mt={"1em"}
            align={"center"}
            justify={"space-around"}
            fontFamily={`'barlow-condensed', sans-serif`}
            color={"white"}
            fontSize={{ lg: "1em", base: "0.8em" }}
          >
            <Flex flex={1} justify={"center"}>
              <Flex
                flexDir={"column"}
                gap={"0.5em"}
                w={{ lg: "60%", base: "90%" }}
              >
                {[
                  "JavaScript",
                  "ReactJS",
                  "Redux",
                  "HTML",
                  "CSS",
                  "Framer Motion",
                  "Chakra UI",
                ].map((tech, index) => (
                  <Flex
                    key={index}
                    justify={"center"}
                    borderRadius={"1em"}
                    bgColor={"#918430"}
                    align={"center"}
                    h={"30px"}
                    boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
                  >
                    {tech}
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex flex={1} justify={"center"}>
              <Flex
                flexDir={"column"}
                gap={"0.5em"}
                w={{ lg: "60%", base: "90%" }}
              >
                {[
                  "Node JS",
                  "REST API",
                  "Database ORM",
                  "My SQL",
                  "Express JS",
                  "Multer",
                  "Node Mailer",
                ].map((tech, index) => (
                  <Flex
                    key={index}
                    justify={"center"}
                    borderRadius={"1em"}
                    bgColor={"#685a35"}
                    align={"center"}
                    h={"30px"}
                    boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
                  >
                    {tech}
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex flex={1} justify={"center"}>
              <Flex
                flexDir={"column"}
                gap={"0.5em"}
                w={{ lg: "60%", base: "90%" }}
              >
                {[
                  "Adobe Photoshop",
                  "Problem Solving",
                  "Team work",
                  "Critical thinking",
                  "Creativity",
                ].map((tech, index) => (
                  <Flex
                    key={index}
                    justify={"center"}
                    borderRadius={"1em"}
                    bgColor={"#332802"}
                    align={"center"}
                    h={"30px"}
                    boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5)"
                  >
                    {tech}
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>

      {/* portfolio */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Flex
          id="portfolio"
          py={{ lg: "9em", base: "8em" }}
          flexDir={"column"}
          bgColor={"#f0e4cd"}
          gap={"2em"}
        >
          <Flex
            justify={"center"}
            color={"#685a35"}
            fontSize={"3em"}
            fontFamily={`'Caveat Variable', sans-serif`}
            fontWeight={"bold"}
            pb={"1em"}
          >
            PORTFOLIO
          </Flex>
          {/* the cappa */}
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            borderY={"2px dashed white"}
            gap={{ base: "1em", lg: 0 }}
          >
            <Flex
              flexDir={"column"}
              flex={1}
              align={"center"}
              py={"1em"}
              gap={{ base: "2em", lg: "1em" }}
            >
              <Text fontSize={"3em"} fontWeight={"bold"} color={"#685a35"}>
                The CAPPA
              </Text>
              <Flex
                w={"90%"}
                cursor={"pointer"}
                boxShadow={"1px 4px 6px rgba(0, 0, 0, 0.5)"}
                borderRadius={"1em"}
                onClick={theCappa.onOpen}
                justify={"center"}
                align={"center"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Image w={"90%"} src={cappa1}></Image>
              </Flex>
            </Flex>
            <Flex
              flex={2}
              flexDir={"column"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                w={{ lg: "70%", base: "90%" }}
                pt={{ base: "1em", lg: 0 }}
                h={"30%"}
                justify={"center"}
                align={"center"}
                fontSize={{ lg: "1.5em", base: "1em" }}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                "The Cappa" is an application for hotel booking, property
                management, room management, viewing total orders, and
                generating a sales report.
              </Flex>
              <Flex
                pt={"1em"}
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                fontSize={"1em"}
                fontStyle={"italic"}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                JavaScript, React, Chakra UI, Redux, HOC, CSS, My SQL, Express
                JS, Node JS, Axios, REST API, JWT, ORM, Multer, Node Mailer.
              </Flex>
              <Flex
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                justify={{ base: "center", lg: "normal" }}
                fontSize={"3em"}
                color={"#685a35"}
                pt={"0.2em"}
                gap={"0.3em"}
              >
                <Link
                  transition="transform 0.5s ease"
                  _hover={{ transform: "translateY(-10px)" }}
                  href="https://jcwd020605.project-kelas.pw/"
                >
                  <Icon as={BiLogoChrome} />
                </Link>
                <Link
                  transition="transform 0.5s ease"
                  _hover={{ transform: "translateY(-10px)" }}
                  href="https://github.com/purwadhikafullstack/jcwd020605"
                >
                  <Icon as={BiLogoGithub} />
                </Link>
              </Flex>
            </Flex>
          </Flex>

          {/* spotify(desktop and mobile) */}
          {/* desktop */}
          <Flex
            display={{ base: "none", lg: "flex" }}
            borderY={"2px dashed white"}
          >
            <Flex
              flex={2}
              justify={"center"}
              align={"center"}
              flexDir={"column"}
            >
              <Flex
                w={"70%"}
                h={"40%"}
                justify={"center"}
                align={"center"}
                fontSize={"1.5em"}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                A Spotify clone that closely resembles the original version,
                capable of playing songs, pausing, adjusting volume, adding
                songs, and creating playlists.
              </Flex>
              <Flex
                w={"70%"}
                align={"center"}
                fontSize={"1em"}
                fontStyle={"italic"}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                JavaScript, React, Chakra UI, Redux, HOC, CSS, JSON, Axios,
                Multer, Node Mailer.
              </Flex>
              <Flex
                w={"70%"}
                align={"center"}
                fontSize={"3em"}
                color={"#685a35"}
                pt={"0.2em"}
                gap={"0.3em"}
              >
                <Link
                  transition="transform 0.5s ease"
                  _hover={{ transform: "translateY(-10px)" }}
                  href="https://github.com/Reynaldibong/group5-spotify"
                >
                  <Icon as={BiLogoGithub} />
                </Link>
              </Flex>
            </Flex>
            <Flex
              flexDir={"column"}
              flex={1}
              align={"center"}
              py={"1em"}
              gap={"1em"}
            >
              <Text fontSize={"3em"} fontWeight={"bold"} color={"#685a35"}>
                SPOTIFY
              </Text>
              <Flex
                w={"90%"}
                cursor={"pointer"}
                boxShadow={"1px 4px 6px rgba(0, 0, 0, 0.5)"}
                borderRadius={"1em"}
                onClick={spotify.onOpen}
                justify={"center"}
                align={"center"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Image w={"85%"} py={"0.5em"} src={spotify1}></Image>
              </Flex>
            </Flex>
          </Flex>
          {/* mobile */}
          <Flex
            display={{ base: "flex", lg: "none" }}
            flexDir={{ base: "column", lg: "row" }}
            borderY={"2px dashed white"}
            gap={{ base: "1em", lg: 0 }}
          >
            <Flex
              flexDir={"column"}
              flex={1}
              align={"center"}
              py={"1em"}
              gap={{ base: "2em", lg: "1em" }}
            >
              <Text fontSize={"3em"} fontWeight={"bold"} color={"#685a35"}>
                SPOTIFY,
              </Text>
              <Flex
                w={"90%"}
                cursor={"pointer"}
                boxShadow={"1px 4px 6px rgba(0, 0, 0, 0.5)"}
                borderRadius={"1em"}
                onClick={spotify.onOpen}
                justify={"center"}
                align={"center"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Image w={"90%"} src={spotify1}></Image>
              </Flex>
            </Flex>
            <Flex
              flex={2}
              flexDir={"column"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                w={{ lg: "70%", base: "90%" }}
                pt={{ base: "1em", lg: 0 }}
                h={"30%"}
                justify={"center"}
                align={"center"}
                fontSize={{ lg: "1.5em", base: "1em" }}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                A Spotify clone that closely resembles the original version,
                capable of playing songs, pausing, adjusting volume, adding
                songs, and creating playlists.
              </Flex>
              <Flex
                pt={{ base: "1em", lg: 0 }}
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                fontSize={"1em"}
                fontStyle={"italic"}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                JavaScript, React, Chakra UI, Redux, HOC, CSS, JSON, Axios,
                Multer, Node Mailer.
              </Flex>
              <Flex
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                justify={{ base: "center", lg: "normal" }}
                fontSize={"3em"}
                color={"#685a35"}
                pt={"0.2em"}
                gap={"0.3em"}
              >
                <Link
                  transition="transform 0.5s ease"
                  _hover={{ transform: "translateY(-10px)" }}
                  href="https://github.com/Reynaldibong/group5-spotify"
                >
                  <Icon as={BiLogoGithub} />
                </Link>
              </Flex>
            </Flex>
          </Flex>

          {/* ig */}
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            borderY={"2px dashed white"}
            gap={{ base: "1em", lg: 0 }}
          >
            <Flex
              flexDir={"column"}
              flex={1}
              align={"center"}
              py={"1em"}
              gap={{ base: "2em", lg: "1em" }}
            >
              <Text fontSize={"3em"} fontWeight={"bold"} color={"#685a35"}>
                INSTAGRAM
              </Text>
              <Flex
                w={"90%"}
                cursor={"pointer"}
                boxShadow={"1px 4px 6px rgba(0, 0, 0, 0.5)"}
                borderRadius={"1em"}
                onClick={instagram.onOpen}
                justify={"center"}
                align={"center"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                <Image w={"90%"} src={ig1}></Image>
              </Flex>
            </Flex>
            <Flex
              flex={2}
              flexDir={"column"}
              justify={"center"}
              align={"center"}
            >
              <Flex
                w={{ lg: "70%", base: "90%" }}
                pt={{ base: "1em", lg: 0 }}
                h={"30%"}
                justify={"center"}
                align={"center"}
                fontSize={{ lg: "1.3em", base: "1em" }}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                An Instagram, featuring comprehensive development and a user
                experience closely resembling the original version. logging in,
                registering, resetting passwords, editing profiles, adding,
                liking, and commenting on posts from other accounts.
              </Flex>
              <Flex
                pt={{ base: "1em", lg: "2em" }}
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                fontSize={"1em"}
                fontStyle={"italic"}
                color={"#685a35"}
                fontFamily={`'Barlow-condensed', sans-serif`}
              >
                JavaScript, React, Chakra UI, Redux, HOC, CSS, My SQL, Express
                JS, Node JS, Axios, REST API, Nanoid, ORM, Multer, Node Mailer.
              </Flex>
              <Flex
                w={{ lg: "70%", base: "90%" }}
                align={"center"}
                justify={{ base: "center", lg: "normal" }}
                fontSize={"3em"}
                color={"#685a35"}
                pt={"0.2em"}
                gap={"0.3em"}
              >
                <Link
                  transition="transform 0.5s ease"
                  _hover={{ transform: "translateY(-10px)" }}
                  href="https://github.com/Reynaldibong/Solo-project-IG"
                >
                  <Icon as={BiLogoGithub} />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>

      {/* contact */}
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
      >
        <Flex
          id="contact"
          justify={"space-around"}
          py={{ lg: "17em", base: "12em" }}
          bgColor={"#fcfbf3"}
        >
          <Flex flex={1} display={{ lg: "flex", base: "none" }}></Flex>
          <Flex flex={1} flexDir={"column"} align={"center"}>
            <Flex
              justify={"center"}
              fontSize={"3em"}
              fontFamily={`'Caveat Variable', sans-serif`}
              fontWeight={"bold"}
              color={"#685a35"}
              pb={{ lg: "2em", base: "1em" }}
            >
              CONTACT
            </Flex>

            <Flex
              display={{ base: "flex", lg: "none" }}
              w={"30%"}
              pb={"2em"}
              justify={"center"}
            >
              <Image src={totoro2} />
            </Flex>
            <Flex
              justify={"center"}
              fontSize={{ lg: "0.9em", base: "0.8em" }}
              fontFamily={`'Exo 2 Variable', sans-serif`}
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"#685a35"}
              pb={"1em"}
            >
              Let’s collaborate as a team
            </Flex>

            <Flex
              justify={"center"}
              fontSize={"1em"}
              fontFamily={`'Outfit Variable', sans-serif`}
              fontWeight={"bold"}
              color={"#685a35"}
              pb={"1em"}
            >
              Contact me if you have any inquiries
            </Flex>

            <Flex
              w={"70%"}
              align={"center"}
              justify={"center"}
              fontFamily={`'Barlow-condensed', sans-serif`}
              color={"white"}
              fontSize={"2em"}
              gap={"1em"}
            >
              <Link
                borderRadius={"0.3em"}
                display={"flex"}
                p={"0.5em"}
                alignItems={"center"}
                bgColor={"#918430"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
                href="mailto:reynaldiwijaya0801@gmail.com"
                boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.5)"
              >
                <Icon as={BiLogoGmail} />
              </Link>

              <Link
                borderRadius={"0.3em"}
                display={"flex"}
                p={"0.5em"}
                alignItems={"center"}
                bgColor={"#918430"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
                href="https://www.linkedin.com/in/reynaldi-wijaya/"
                boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.5)"
              >
                <Icon as={BiLogoLinkedinSquare} />
              </Link>

              <Link
                borderRadius={"0.3em"}
                display={"flex"}
                p={"0.5em"}
                alignItems={"center"}
                bgColor={"#918430"}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
                href="https://github.com/Reynaldibong"
                boxShadow="inset 0 -5px 5px rgba(0, 0, 0, 0.5), inset 0 5px 5px rgba(255, 255, 255, 0.5), 0 2px 2px rgba(0, 0, 0, 0.5)"
              >
                <Icon as={BiLogoGithub} />
              </Link>
            </Flex>
          </Flex>
          <Flex
            display={{ lg: "flex", base: "none" }}
            flex={1}
            justify={"center"}
          >
            <Image src={totoro2} />
          </Flex>
        </Flex>

        <Flex
          bgColor={"#fcfbf3"}
          justify={"center"}
          align={"center"}
          gap={"0.3em"}
          py={"1em"}
        >
          <Icon as={BiCopyright} />
          2023 Reynaldi Wijaya
        </Flex>
      </motion.div>

      <TheCappa isOpen={theCappa.isOpen} onClose={theCappa.onClose} />
      <Spotify isOpen={spotify.isOpen} onClose={spotify.onClose} />
      <Instagram isOpen={instagram.isOpen} onClose={instagram.onClose} />
    </>
  );
}
