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
      pt={{ base: "125px", md: "135px", lg: "135px" }}
    >
      {/* ------------ Top Ilustation is here ---------------- */}
      <Box>
        {/* --------------------- To-the-Left --------------------- */}
        <Box
          position="absolute"
          top="0"
          left="0"
          display={["none", "none", "none", "block", "block", "block", "block"]}
        >
          <Image
            src="/img/top-left-cube.png"
            alt="left-cube illustration"
            objectFit="cover"
            width="210px"
          />
        </Box>

        {/* --------------------- To-the-Left (Mobile screen***** 390px) --------------------- */}
        <Box
          position="absolute"
          top="0"
          left="0"
          display={["block", "block", "block", "none", "none", "none", "none"]}
        >
          <Image
            src="/img/top-left-cube.png"
            alt="left-cube illustration"
            objectFit="cover"
            width="157.5px"
            height="86.25px"
          />
        </Box>

        {/* --------------------- To-the-Right --------------------- */}
        <Box
          position="absolute"
          top="0"
          right="0"
          display={["none", "none", "none", "block", "block", "block", "block"]}
        >
          <Image
            src="/img/top_right-light-green-cube.png"
            alt="green-cube illustration"
            objectFit="cover"
            width="210px"
          />
        </Box>

        {/* --------------------- To-the-Left (Mobile screen***** 390px) --------------------- */}
        <Box
          position="absolute"
          top="28"
          right="0"
          display={["block", "block", "block", "none", "none", "none", "none"]}
        >
          <Image
            src="/img/top-right-cube.png"
            alt="green-cube illustration"
            objectFit="inherit"
            width="157.5px"
            height="130.47px"
          />
        </Box>
      </Box>

      <ContainerWrapper px="5%">
        <Flex
          as="div"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          pos={"relative"}
        >
          <Box pos={"absolute"} top={-40}>
            <Image src="/img/section-one/stars.svg" w={"inherit"} alt="stars" />
          </Box>
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
          <HStack
            gap={5}
            mt="32px"
            mb={["150px", "150px", "150px", "192px", "192px", "192px"]}
          >
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
      <Box
        position="absolute"
        bottom="0"
        display={["none", "none", "none", "block", "block", "block"]}
      >
        <Image
          src="/img/hero-bottom_lines.png"
          alt="bottom lines-image"
          objectFit="cover"
        />
      </Box>

      {/* ---------------------- For Mobile Screen(768px) ---------------------------- */}
      <Box
        position="absolute"
        bottom="0"
        display={["none", "block", "block", "none", "none", "none"]}
      >
        <Image
          src="/img/hero-bottom_lines-768.png"
          alt="bottom lines-image"
          objectFit="cover"
        />
      </Box>

      {/* ---------------------- For Mobile Screen(390px) ---------------------------- */}
      <Box
        position="absolute"
        bottom="0"
        display={["block", "none", "none", "none", "none", "none"]}
      >
        <Image
          src="/img/hero-bottom_lines-390.png"
          alt="bottom lines-image"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
