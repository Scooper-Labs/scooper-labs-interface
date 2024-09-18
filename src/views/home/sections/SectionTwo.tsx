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

const SectionTwo = () => {
  return (
    <Box
      as="section"
      id="ourproducts"
      position="relative"
      display="flex"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="#0D0D0F"
      py="10px"
      px="80px"
      pt=""
    >
      {/* <ContainerWrapper> */}
      <Flex
        as="div"
        flexDir="column"
        alignItems="flex-start"
        textAlign="left"
        width={"100%"}
        gap={24}
      >
        <Heading
          color="#002EE9"
          fontWeight={400}
          fontSize="124px"
          fontFamily="Adineue-pro"
          textAlign="left"
        >
          Our Products
        </Heading>

        <Box className="space-y-8" width={"inherit"}>
          <Flex direction={"row"} wrap={"nowrap"} gap={8}>
            <Box position="relative" className="" flexGrow={"1"}>
              <Image
                src="/img/asset-scooper-product.png"
                alt="Asset scooper product"
                objectFit="cover"
                width="100%"
                // height="100%"
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
            <Box position="relative" className="" flexGrow={"1"}>
              <Image
                src="/img/blockrepo-product.png"
                alt="Base repo product"
                objectFit="cover"
                width="100%"
                // height="100%"
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
          </Flex>
        </Box>
      </Flex>
      {/* </ContainerWrapper> */}

      {/* -------------------- Fixed Bottom Image ---------------------- */}
      <Box mt="200px" marginLeft={"auto"}>
        <Image
          src="/img/checkered-box.png"
          alt="checkered box"
          objectFit="cover"
          width={"480px"}
          height={"190px"}
        />
      </Box>
    </Box>
  );
};

export default SectionTwo;
