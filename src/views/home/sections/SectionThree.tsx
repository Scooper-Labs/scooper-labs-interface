import React from "react";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";

const SectionThree = () => {
  return (
    <Box
      as="section"
      id="OurWhy"
      position="relative"
      display="flex"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="#0D0D0F"
      pt="50px"
    >
      <ContainerWrapper px="54px">
        <Flex as="div" flexDir="column" alignItems="flex-start">
          {/* --------------- Illustration Boxes (to-the-left*****) --------------- */}
          <Box position="absolute" top="-4" left="9">
            <Image
              src="/img/Boxes.svg"
              alt="Boxes"
              objectFit="cover"
              boxSize={["50px", "50px", "55px", "55px", "90px", "90px", "90px"]}
            />
          </Box>
          <Heading
            color="#002EE9"
            fontWeight={400}
            fontSize={["60px", "60px", "60px", "60px", "124px"]}
            fontFamily="Adineue-pro"
            textAlign={["center", "center", "center", "left", "left", "left"]}
          >
            Answering the Why
          </Heading>

          <Box
            fontSize={["14px", "14px", "16px", "16px", "18px", "20px"]}
            maxW="900px"
            mt="20px"
            // pb="40%"
            textAlign={"left"}
          >
            <Flex flexDir="column">
              <Text mb="48px">
                Satoshi Nakamoto in one of his posts in 2009 said,{" "}
                <Text as="i" color="#002EE9">
                  “The root problem with conventional currency is all the trust
                  that's required to make it work. The central bank must be
                  trusted not to debase the currency, but the history of fiat
                  currencies is full of breaches of that trust.”
                </Text>
              </Text>

              <Box
                position="absolute"
                right="60"
                top={"30%"}
                display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              >
                <Image
                  src="/img/section-4-stars.svg"
                  alt="stars"
                  objectFit="cover"
                  width="122px"
                  height="53.85px"
                />
              </Box>

              <Text mb="48px">
                In 2023 alone, we saw the second biggest bank collapse in the
                history of the United States behind the 2008 global recession.
                That same year, we saw the collapse of four other relatively big
                banks. In 2024, we saw inflation reach record levels across the
                world as the global banking system continued to experience
                unprecedented levels of strain.
              </Text>

              <Text mb="48px">
                As builders, we have seen how blockchain technology has
                transformed the lives of hundreds of thousands of people. We
                have seen the promise of blockchain not only in code but in its
                capacity to forge connections, to bridge the chasm between the
                digital and the tangible, and to breathe life into a community
                that thrives on shared trust.
              </Text>

              <Box
                position="absolute"
                right="0"
                bottom={40}
                display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              >
                <Image
                  src="/img/star-ship-2.svg"
                  alt="star ship"
                  objectFit="cover"
                  width="156.16px"
                  height="68.93px"
                />
              </Box>

              {/* ---------------------- For Mobile Screen ---------------------------- */}
              <Box>
                <Box
                  position="absolute"
                  right="10"
                  bottom={10}
                  display={{
                    base: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  }}
                >
                  <Image
                    src="/img/section-4-stars.svg"
                    alt="stars"
                    objectFit="cover"
                    width="132.16px"
                    height="53.93px"
                  />
                </Box>

                <Box
                  position="absolute"
                  right="6"
                  bottom={0}
                  display={{
                    base: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  }}
                >
                  <Image
                    src="/img/star-ship-2.svg"
                    alt="star ship"
                    objectFit="cover"
                    width="122.16px"
                    height="53.93px"
                  />
                </Box>
              </Box>

              <Text mb="48px">
                We build to bring this reality to the wider web, to show people
                that their money, their property, their livelihood can be
                changed by blockchain innovation and that real human progress
                happens within this space.
              </Text>

              <Text>Come join us on this journey.</Text>
            </Flex>
          </Box>
        </Flex>
      </ContainerWrapper>

      {/* -------------------- Fixed Bottom Image ---------------------- */}
      <Box
        display={["none", "none", "none", "none", "block", "block", "block"]}
      >
        <Image
          src={"/img/poly-ground.svg"}
          alt="bottom illustration"
          objectFit="cover"
        />
      </Box>

      {/* ---------------------- For Mobile Screen(768px*****) ---------------------------- */}
      <Box display={["none", "none", "none", "block", "none", "none", "none"]}>
        <Image
          src="/img/poly-ground-768.svg"
          alt="star ship"
          objectFit="cover"
          mt={"-200px"}
        />
      </Box>

      {/* ---------------------- For Mobile Screen(390px*****) ---------------------------- */}
      <Box
        display={["block", "block", "block", "none", "none", "none", "none"]}
      >
        <Image
          src="/img/poly-ground-390.png"
          alt="star ship"
          objectFit="inherit"
        />
      </Box>
    </Box>
  );
};

export default SectionThree;
