import React from "react";
import { Box, Image, Text, Flex, HStack } from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";

const HeroSection = () => {
  const scooperProductsLogos = [
    { src: "/img/assetscooper-logo.png", alt: "assetscooper logo" },
    { src: "/img/blockrepo-logo.png", alt: "blockrepo logo" },
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
      py="10px"
      px="10px"
    >
      <Box pos={"absolute"} top={0} left={0}>
        <Image
          src="/img/section-one/top-left-cube.svg"
          w={"inherit"}
          alt="top-right-cube logo"
        />
      </Box>
      <Box pos={"absolute"} top={0} right={0}>
        <Image
          src="/img/section-one/top-right-cube.svg"
          w={"inherit"}
          alt="top left cube logo"
        />
      </Box>
      <Box pos={"absolute"} bottom={0} width={"100%"}>
        <Image
          src="/img/section-one-lines.svg"
          w={"inherit"}
          alt="asset scooper lines"
        />
      </Box>
      <ContainerWrapper>
        <Flex
          as="div"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {/* ----------------------- Scooper Labs Logo ----------------------- */}
          <Box>
            <Image
              src="/img/scooper-labs-logo.png"
              w={"208px"}
              alt="assetscooper logo"
            />
          </Box>

          <Text mt="16px" fontSize="20px" fontWeight={500}>
            Shipping Products that give people a reason to come onchain.
          </Text>

          {/* -------------------- Scooper Labs Products ---------------------- */}
          <HStack gap={5} mt="32px">
            {scooperProductsLogos.map((logo, i) => (
              <Box key={i} w="60px" h="60px">
                {logo.src ? (
                  <Image src={logo.src} w="60px" alt={logo.alt} />
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
      {/* <Image
        src="/img/hero-bottom_lines.png"
        alt="bottom lines-image"
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        zIndex={-1}
        objectFit="cover"
        mt="200px"
      /> */}
    </Box>
  );
};

export default HeroSection;
