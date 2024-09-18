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

const SectionOne = () => {
  return (
    <Box
      as="section"
      id="ourproducts"
      position="relative"
      display="flex"
      //   bg="white"
      bg={"url('/img/perspective-2.png')"}
      bgColor={"blue"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="#0D0D0F"
      py="10px"
      px="80px"
      pt=""
      pb={"140px"}
      minHeight={"100dvh"}
    >
      <Flex
        as="div"
        alignSelf={"flex-start"}
        flexDir="column"
        alignItems="flex-start"
        textAlign="left"
        width={"100%"}
      >
        <Heading
          bg="#002EE9"
          color={"white"}
          fontWeight={400}
          fontSize="124px"
          fontFamily="Adineue-pro"
          textAlign="left"
        >
          The Mission
        </Heading>

        <Box className="space-y-8">
          {/* <Flex direction={"row"} wrap={"nowrap"} gap={8}>
            <Box position="relative" className="grow shrink-0">
              <Image
                src="/img/asset-scooper-product.png"
                alt="Asset scooper product"
                objectFit="cover"
                width="100"
                height="100%"
                borderRadius={"10px"}
                // transform={"rotateX(-30.34deg)"}
              />
              <Box className="space-y-4">
                <Text color="#002EE9" fontWeight={"bold"} fontSize={"36px"}>
                  AssetScooper
                </Text>
                <Text color="#002EE9" fontWeight={"normal"} fontSize={"16px"}>
                  Aggregate and sweep multiple assets in a single transaction.
                </Text>
              </Box>
            </Box>
            <Box position="relative" className="grow shrink-0">
              <Image
                src="/img/blockrepo-product.png"
                alt="Asset scooper product"
                objectFit="cover"
                width="100"
                height="100%"
                borderRadius={"10px"}
                // transform={"rotateX(-30.34deg)"}
              />
              <Box className="space-y-4">
                <Text color="#002EE9" fontWeight={"bold"} fontSize={"36px"}>
                  BaseRepo
                </Text>
                <Text color="#002EE9" fontWeight={"normal"} fontSize={"16px"}>
                  Bringing 10,000 developers into the base ecosystem
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            direction={"row"}
            wrap={"nowrap"}
            gap={8}
            mt={"10rem"}
            pr={"2rem"}
          >
            <Box width={"50%"}>
              <Box
                width={"100%"}
                height={"474px"}
                border={"2px dashed blue"}
                borderRadius={"10px"}
              ></Box>
              <Box className="space-y-4">
                <Text color="#002EE9" fontWeight={"bold"} fontSize={"36px"}>
                  Coming Soon
                </Text>
              </Box>
            </Box>
          </Flex> */}
        </Box>
      </Flex>

      <Box
        pos={"relative"}
        top={"18rem"}
        // mb={"10rem"}
        marginLeft={"auto"}
        w={"100%"}
      >
        <Image
          src="/img/space-ship-assetscooper.png"
          alt="checkered box"
          objectFit="cover"
          width={"auto"}
          height={"auto"}
          mr={"16rem"}
          ml={"auto"}
        />

        <Box p={"1rem"}>
          <Text
            bg={"url('/img/mission-text-bg.svg')"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            fontWeight={"normal"}
            fontSize={"44px"}
            // maxW={"1115px"}
            // h={"187px"}
            w={"80%"}
            pl={"1rem"}
            pr={"2rem"}
            // py={"2rem"}
            borderRadius={"8px"}
            // lineHeight={"normal"}
            style={{ textWrap: "balance" }}
          >
            We are on a mission to interface the crypto world with the everyday
            web2 world that millions of people use, to make their lives better
            with blockchain technology.
          </Text>
        </Box>
      </Box>

      {/* -------------------- Fixed Bottom Image ---------------------- */}
      <Box mt="200px" marginLeft={"auto"}>
        {/* <Image
          src="/img/checkered-box.png"
          alt="checkered box"
          objectFit="cover"
          width={"480px"}
          height={"190px"}
        /> */}
      </Box>
    </Box>
  );
};

export default SectionOne;
