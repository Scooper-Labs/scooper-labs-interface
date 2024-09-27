import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  HStack,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContainerWrapper from "@/components/ContainerWrapper";

const MotionBox = motion.div;

const HeroSection = () => {
  const fixedBottomImage = useBreakpointValue({
    base: "/img/hero-bottom_lines-390.svg",
    sm: "/img/hero-bottom_lines-768.svg",
    md: "/img/hero-bottom_lines.svg",
    lg: "/img/hero-bottom_lines-1920.svg",
  });

  const scooperProductsLogos = [
    {
      src: "/img/assetscooper-logo.png",
      alt: "assetscooper logo",
      href: "https://assetscooper.xyz",
    },
    {
      src: "/img/blockrepo-logo.png",
      alt: "blockrepo logo",
      href: "https://x.com/BlockRepo",
    },
    { src: "", alt: "placeholder" },
    { src: "", alt: "placeholder" },
  ];

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      flexDir="column"
      color="white"
      pt={{ base: "125px", md: "135px", lg: "135px" }}
    >
      {/* ------------ Top Ilustation is here ---------------- */}
      {/* Top Left Cube */}
      <Box
        pos={"absolute"}
        top={{ base: "-10%", sm: "-10%", md: "-8%", lg: "-13%" }}
        left={0}
      >
        <Image src="/img/top-left-cube.svg" w={"inherit"} alt="top left cube" />
      </Box>

      {/* Top Right Cube */}
      <Box
        pos={"absolute"}
        top={{ base: "6%", sm: "6%", md: "-8%", lg: "-13%" }}
        right={0}
      >
        <Image
          src="/img/top-right-cube.svg"
          w={"inherit"}
          alt="top left cube"
        />
      </Box>

      <ContainerWrapper>
        <Flex
          as="div"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          pos={"relative"}
        >
          {/* --------------------- Star illustration ------------------ */}
          <Box
            pos={"absolute"}
            right={"35%"}
            top={-20}
            display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          >
            <Image src="/img/section-one/stars.svg" w={"inherit"} alt="stars" />
          </Box>

          {/* ----------------------- Scooper Labs Logo ----------------------- */}
          <Box>
            <HStack fontSize="36px" fontWeight={900} gap={0.8}>
              <Text as="span">Sc</Text>
              <MotionBox
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                style={{ transformOrigin: "center", gap: "0.7" }}
              >
                <Image
                  src="/img/section-one/green-circle-brush.svg"
                  w="18px"
                  alt="assetscooper logo"
                  className="green-circle-brush"
                />
              </MotionBox>
              <MotionBox
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                style={{ transformOrigin: "center" }}
              >
                <Image
                  src="/img/section-one/green-circle-brush.svg"
                  w="18px"
                  alt="assetscooper logo"
                  className="green-circle-brush"
                />
              </MotionBox>
              <Text as="span"> per Labs</Text>
            </HStack>
          </Box>

          <Text mt="16px" fontSize="20px" fontWeight={500}>
            Shipping Products that give people a reason to come onchain.
          </Text>

          {/* -------------------- Scooper Labs Products ---------------------- */}
          <HStack
            gap={5}
            mt="32px"
            mb={["150px", "150px", "150px", "192px", "192px", "192px"]}
          >
            {scooperProductsLogos.map((logo, i) => (
              <Box key={i} w="60px" h="60px">
                {logo.src ? (
                  <ChakraLink href={logo.href || "#"} isExternal>
                    <Image src={logo.src} w="60px" alt={logo.alt} />
                  </ChakraLink>
                ) : (
                  <Box
                    borderRadius="8px"
                    w="60px"
                    h="60px"
                    border="1.39px dashed white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  ></Box>
                )}
              </Box>
            ))}
          </HStack>
        </Flex>
      </ContainerWrapper>
      {/* -------------------- Fixed Bottom Image ---------------------- */}
      <Box position="absolute" bottom="0">
        <Image
          src={fixedBottomImage}
          alt="bottom lines-image"
          objectFit="cover"
          w="inherit"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
