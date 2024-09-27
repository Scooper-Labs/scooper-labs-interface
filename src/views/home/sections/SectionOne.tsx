import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContainerWrapper from "@/components/ContainerWrapper";

const SectionOne = () => {
  const overlayImage = useBreakpointValue({
    base: "/img/the-mission-blue-grid-390.svg",
    sm: "/img/the-mission-blue-grid-768.svg",
    md: "/img/the-mission-blue-grid-1440.svg",
    lg: "/img/the-mission-blue-grid.svg",
  });

  const headingMission = useBreakpointValue({
    base: "60px",
    sm: "60px",
    md: "124px",
    lg: "124px",
  });

  const spaceShipWidth = useBreakpointValue({
    base: "150px",
    sm: "180px",
    md: "199px",
    lg: "200px",
  });

  return (
    <Box
      as="section"
      id="TheMission"
      position="relative"
      display="flex"
      flexDir="column"
      color="#0D0D0F"
      px={{ base: "0px", sm: "0px", md: "56px", lg: "56px" }}
      pb="74px"
      overflow="hidden"
      minH="100vh"
    >
      {/* ------------------ Image Overlay --------------- */}
      <Box>
        <Image
          src={overlayImage}
          alt="Overlay Image"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex="2"
          // opacity="6"
        />
      </Box>

      {/* Background Video - (***fixed***) */}
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        src="/img/light-burst.mp4"
        poster="/img/light-burst.mp4"
        position="absolute"
        top="0"
        bottom="80"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="0"
      />

      {/* --------------------- For Mobile Screen --------------------- */}
      <Flex
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
        width="100%"
        p="8px"
        bg="#002EE9"
        zIndex="1"
      >
        <Heading
          color="white"
          fontWeight={400}
          fontSize={headingMission}
          fontFamily="Adineue-pro"
          textAlign="center"
        >
          The Mission
        </Heading>
      </Flex>

      <ContainerWrapper zIndex="2" position="relative" minH="100vh">
        <Flex as="div" width={"100%"}>
          {/* ---------- Tablet and Desktop ---------- */}
          <Flex
            display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Heading
              bg="#002EE9"
              color="white"
              fontWeight={400}
              fontSize={headingMission}
              fontFamily="Adineue-pro"
              textAlign="left"
              padding="8px"
              borderRadius="0px 8px 8px 0px"
            >
              The Mission
            </Heading>
          </Flex>
        </Flex>

        <Box
          position="absolute"
          right={{ base: "10", sm: "10", md: "60", lg: "60" }}
          bottom={{ base: "180px", sm: "180px", md: "120px", lg: "190px" }}
          zIndex={2}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              src="/img/space-ship-assetscooper.svg"
              alt="spaceship"
              objectFit="cover"
              width={spaceShipWidth}
            />
          </motion.div>
        </Box>

        <Box
          position="absolute"
          bottom="0"
          left="0"
          width="100%"
          zIndex={1}
          // mb="50px"
        >
          {/* ------------ desktop ------------- */}
          <Box display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1115"
              height="187"
              viewBox="0 0 1115 187"
              fill="none"
            >
              <path
                d="M8 0H1107C1111.42 0 1115 3.58 1115 8V126.5C1115 130.918 1111.42 134.5 1107 134.5H1016.5C1012.08 134.5 1008.5 138.082 1008.5 142.5V179C1008.5 183.418 1004.92 187 1000.5 187H8C3.58 187 0 183.42 0 179V8C0 3.58 3.58 0 8 0Z"
                fill="#00FF38"
              />
              <text
                x="40"
                y="60"
                font-weight="normal"
                fill="black"
                style={{
                  lineHeight: "70px",
                  fontSize: "44",
                }}
              >
                <tspan x="20" dy="0">
                  We are on a mission to interface the crypto world with
                </tspan>
                <tspan x="20" dy="50">
                  the everyday web2 world that millions of people use, to
                </tspan>
                <tspan x="20" dy="50">
                  make their lives better with blockchain technology.
                </tspan>
              </text>
            </svg>
          </Box>

          {/* ------------- Tablet ------------------ */}
          <Box display={{ base: "none", sm: "none", md: "block", lg: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="589"
              height="94"
              viewBox="0 0 589 94"
              fill="none"
            >
              <path
                d="M0.0427796 8.04256C0.01919 3.60772 3.60776 0 8.04267 0H581C585.418 0 589 3.58172 589 8V59.5C589 63.9183 585.418 67.5 581 67.5H379.652C375.175 67.5 371.569 71.1744 371.654 75.6509L371.846 85.8491C371.931 90.3256 368.325 94 363.848 94H8.45755C4.05588 94 0.481086 90.4442 0.457673 86.0425L0.0427796 8.04256Z"
                fill="#00FF38"
              />
              <text
                x="40"
                y="30"
                font-weight="normal"
                fill="black"
                style={{
                  lineHeight: "26px",
                  fontSize: "20",
                }}
              >
                <tspan x="20" dy="0">
                  We are on a mission to interface the crypto world with the
                </tspan>
                <tspan x="20" dy="25">
                  everyday web2 world that millions of people use, to make their
                </tspan>
                <tspan x="20" dy="25">
                  lives better with blockchain technology.
                </tspan>
              </text>
            </svg>
          </Box>

          {/* ------------ Mobile ----------------- */}
          <Box
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
            py="39.15px"
            px="39.15px"
          >
            <Flex
              justify="center"
              alignItems="center"
              bg="#00FF38"
              padding="8px 16px"
              borderRadius="8px"
              h="100%"
            >
              <Text fontSize="14px" textAlign="center">
                We are on a mission to interface the crypto world with the
                everyday web2 world that millions of people use, to make their
                lives better with blockchain technology.
              </Text>
            </Flex>
          </Box>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default SectionOne;
