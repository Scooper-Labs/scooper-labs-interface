import React from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Heading,
  chakra,
  Image,
} from "@chakra-ui/react";
import ContainerWrapper from "@/components/ContainerWrapper";

const SectionThree = () => {
  return (
    <Box
      as="section"
      id="ourwhy"
      position="relative"
      display="flex"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="#0D0D0F"
      py="10px"
      px="10px"
      pt=""
    >
      <ContainerWrapper>
        <Flex
          as="div"
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
        >
          <Heading
            color="#002EE9"
            fontWeight={400}
            fontSize="124px"
            fontFamily="Adineue-pro"
            textAlign="left"
          >
            Answering
          </Heading>
          <Heading
            color="#002EE9"
            fontWeight={400}
            fontSize="124px"
            fontFamily="Adineue-pro"
            textAlign="left"
          >
            the Why
          </Heading>

          <Box fontSize="20px" mt="5rem">
            <Flex
              direction={"column"}
              gap={8}
              mr={"10rem"}
              fontWeight={"medium"}
            >
              <Text mb={4}>
                Satoshi Nakamoto in one of his posts in 2009 said,{" "}
                <Text as="i" color="#002EE9" fontWeight={"normal"}>
                  “The root problem with conventional currency is all the trust
                  that's required to make it work. The central bank must be
                  trusted not to debase the currency, but the history of fiat
                  currencies is full of breaches of that trust.”
                </Text>
              </Text>

              <Text mb={4}>
                In 2023 alone, we saw the second biggest bank collapse in the
                history of the United States behind the 2008 global recession.
                That same year, we saw the collapse of four other relatively big
                banks. In 2024, we saw inflation reach record levels across the
                world as the global banking system continued to experience
                unprecedented levels of strain.
              </Text>

              <Text mb={4}>
                As builders, we have seen how blockchain technology has
                transformed the lives of hundreds of thousands of people. We
                have seen the promise of blockchain not only in code but in its
                capacity to forge connections, to bridge the chasm between the
                digital and the tangible, and to breathe life into a community
                that thrives on shared trust.
              </Text>

              <Text mb={4}>
                We build to bring this reality to the wider web, to show people
                that their money, their property, their livelihood can be
                changed by blockchain innovation and that real human progress
                happens within this space.
              </Text>

              <Text>Come join us on this journey.</Text>
            </Flex>
          </Box>

          <Box position="absolute" right="0" bottom={40}>
            <Image
              src="/img/star-ship-2.png"
              alt="star ship"
              objectFit="cover"
              width="122px"
              height="53.85px"
              // transform={"rotateX(-30.34deg)"}
            />
          </Box>

          {/* <Box position="absolute" right="0" bottom={0}>
            <Image
              src="/img/star-ship-2.png"
              alt="star ship"
              objectFit="cover"
              width="156.16px"
              height="68.93px"
            />
          </Box> */}
        </Flex>
      </ContainerWrapper>

      {/* -------------------- Fixed Bottom Image ---------------------- */}
      <Box mt="-200px">
        <Image
          src="/img/poly-ground.svg"
          alt="bottom illustration"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default SectionThree;
