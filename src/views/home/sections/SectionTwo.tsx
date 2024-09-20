import React from "react";
import {
  Box,
  Flex,
  HStack,
  Grid,
  Text,
  Heading,
  chakra,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import ContainerWrapper from "@/components/ContainerWrapper";

const products = [
  {
    src: "/img/asset-scooper-product.png",
    alt: "Asset Scooper Product",
    title: "AssetScooper",
    description: "Aggregate and sweep multiple assets in a single transaction.",
    link: "https://x.com/assetscooper.xyz",
  },
  {
    src: "/img/blockrepo-product.png",
    alt: "Base Repo Product",
    title: "BaseRepo",
    description: "Bringing 10,000 developers into the base ecosystem.",
    link: "https://x.com/BlockRepo",
  },
  {
    src: "", // Empty image
    alt: "Base repo product",
    title: "Coming Soon",
    description: "", // Empty description
    link: "", // Empty link,
  },
];

const SectionTwo = () => {
  return (
    <Box
      as="section"
      id="OurProducts"
      position="relative"
      display="flex"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      color="#0D0D0F"
      px="54px"
    >
      <ContainerWrapper>
        <Flex
          as="div"
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
          width={"100%"}
          gap={{ base: "48px", sm: "48px", md: "64px", lg: "80px" }}
        >
          {/* --------------- Illustration Boxes (to-the-left*****) --------------- */}
          <Box position="absolute" top="-5" left="0">
            <Image
              src="/img/Boxes.png"
              alt="Boxes"
              objectFit="cover"
              boxSize={{
                base: "50px",
                sm: "50px",
                md: "55px",
                lg: "90px",
                xl: "90px",
              }}
            />
          </Box>

          <Heading
            pt="20px"
            color="#002EE9"
            fontWeight={400}
            fontSize={{ base: "60px", sm: "60px", md: "60px", lg: "124px" }}
            fontFamily="Adineue-pro"
            textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
          >
            Our Products
          </Heading>

          <Box width={"inherit"} pb="220px">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={8}
            >
              {products.map((product, i) => (
                <Box key={i} position="relative" borderRadius="8px">
                  <Link href={product.link} target="_blank" passHref>
                    {product.src ? (
                      <Image
                        src={product.src}
                        alt={product.alt}
                        objectFit="cover"
                        width="100%"
                      />
                    ) : (
                      <Box
                        height={{
                          base: "224px",
                          sm: "224px",
                          md: "204.148px",
                          lg: "424px",
                          xl: "565px",
                        }}
                        mt={{
                          base: "0px",
                          sm: "0px",
                          md: "48px",
                          lg: "80px",
                          xl: "80px",
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        border="2px dashed #002EE9"
                        bg="transparent"
                        borderRadius="8px"
                      ></Box>
                    )}
                  </Link>
                  <Box className="space-y-4" marginTop={4}>
                    <Link href={product.link} target="_blank" passHref>
                      <Text
                        color="#002EE9"
                        fontWeight={500}
                        fontStyle="normal"
                        fontSize={"36px"}
                      >
                        {product.title || "Coming Soon"}
                      </Text>
                    </Link>
                    <Text
                      color="#002EE9"
                      fontWeight={400}
                      fontStyle="normal"
                      fontSize={"16px"}
                    >
                      {product.description || ""}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </ContainerWrapper>

      {/* -------------------- Fixed Bottom Image (***Desktop and Tablet***) ---------------------- */}
      <Box
        position="absolute"
        right="0"
        bottom={0}
        display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      >
        <Image
          src="/img/checkered-box.png"
          alt="checkered box"
          objectFit="cover"
          width={"480px"}
          height={"190px"}
        />
      </Box>

      {/* -------------------- Fixed Bottom Image (***Mobile***) ---------------------- */}
      <Flex
        alignItems="center"
        justifyContent="center"
        display={{ base: "block", sm: "block", md: "none", lg: "none" }}
      >
        <Image
          src="/img/mobile-Checkered-box.png"
          alt="checkered box"
          objectFit="cover"
          width={"100%"}
        />
      </Flex>
    </Box>
  );
};

export default SectionTwo;
