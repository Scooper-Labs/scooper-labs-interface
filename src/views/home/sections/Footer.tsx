import {
  Box,
  Stack,
  HStack,
  VStack,
  Image,
  Text,
  LinkProps,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import ContainerWrapper from "@/components/ContainerWrapper";
import FooterSignup from "./signUp";
import { SOCIAL_GITHUB, SOCIAL_TWITTER, SOCIAL_LINKEDLN } from "@/utils/site";

const icons = [
  {
    label: "XTwitter",
    icon: <FaXTwitter />,
    href: SOCIAL_TWITTER,
  },
  {
    label: "Github",
    icon: <FiGithub />,
    href: SOCIAL_GITHUB,
  },
  {
    label: "Linkedln",
    icon: <PiLinkedinLogoBold />,
    href: SOCIAL_LINKEDLN,
  },
];

const CustomLink = ({
  href,
  children,
  ...props
}: LinkProps & { href: string }) => {
  return (
    <ChakraLink
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      fontWeight={500}
      fontSize="16px"
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </ChakraLink>
  );
};

const Footer = () => {
  return (
    // <Box p={{ base: 5, md: 8 }}marginInline="auto">

    <Box
      as="section"
      id="footer"
      position="relative"
      display="flex"
      flexDir="column"
      color="white"
      pt="56px"
      marginInline="auto"
    >
      <ContainerWrapper px="2%">
        <Stack
          justifyContent="space-between"
          direction={["column", "column", "column", "row", "row"]}
        >
          <Box>
            <Flex as="div" flexDir="column" alignItems={"flex-start"} gap={3}>
              {["AssetScooper", "BlockRepo", "Blog"].map((item) => (
                <Text
                  key={item}
                  fontFamily="Minecraft"
                  fontSize={["32px", "32px", "32px", "56px", "56px", "120px"]}
                  color="secondaryGray.500"
                  lineHeight="1"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  {item}
                </Text>
              ))}

              <HStack mt="56px">
                {icons.map(({ href, icon }) => (
                  <Box
                    fontSize={["32px", "32px", "32px", "44px", "44px"]}
                    gap={20}
                    color="secondaryGray.500"
                    as={ChakraLink}
                    href={href}
                    cursor="pointer"
                    _hover={{
                      color: "white",
                    }}
                  >
                    {icon}
                  </Box>
                ))}
              </HStack>
            </Flex>
          </Box>

          <HStack
            spacing={["24px", "24px", "24px", "20", "20"]}
            alignItems="flex-start"
            justifyContent={[
              "flex-start",
              "flex-start",
              "flex-start",
              "",
              "flex-end",
            ]}
            flexWrap="wrap"
            mt={["48px", "48px", "48px", "0px", "0px"]}
          >
            <Box display={["flex"]} flexDirection="column" gap={"56px"}>
              <VStack spacing={4} alignItems="flex-start">
                <Text fontFamily="Adineue-pro" fontSize="md" fontWeight="700">
                  Building
                </Text>
                <VStack spacing={2} alignItems="flex-start" color="gray.500">
                  <CustomLink href="#">Building a dapp?</CustomLink>
                  <CustomLink href="#">Building a website?</CustomLink>
                </VStack>
              </VStack>

              <VStack
                spacing={4}
                alignItems="flex-start"
                mt={["-24px", "-24px", "-24px", "0px", "0px"]}
              >
                <Text fontFamily="Adineue-pro" fontSize="md" fontWeight="700">
                  Company
                </Text>
                <VStack spacing={2} alignItems="flex-start" color="gray.500">
                  <CustomLink href="#">Contribute</CustomLink>
                  <CustomLink href="#">Media assets</CustomLink>
                  <CustomLink href="#">Give Feedback</CustomLink>
                  <CustomLink href="#">Brand Assets</CustomLink>
                </VStack>
              </VStack>
            </Box>

            <VStack display={["flex"]} spacing={4} alignItems="flex-start">
              <Text fontFamily="Adineue-pro" fontSize="md" fontWeight="700">
                Misc
              </Text>
              <VStack alignItems="flex-start" color="gray.500">
                <CustomLink href="mailto:assetscooper@gmail.com?subject=How can we help you today?">
                  Send us a mail
                </CustomLink>
              </VStack>
            </VStack>
          </HStack>
        </Stack>

        <Stack
          direction={["column", "column", "column", "row", "row"]}
          spacing={3}
          alignItems={["flex-start", "flex-start", "flex-start", "", "center"]}
          justifyContent="space-between"
          mt={["32px", "32px", "32px", "108px", "108px"]}
          mb="44px"
        >
          <>
            <FooterSignup />
          </>
          <Stack spacing={2}>
            <Flex flexDir="column">
              <Box mt={["40px", "40px", "30px", "0px", "0px"]}>
                <Image
                  src="/img/scooperlabs-logo.png"
                  w={"333px"}
                  alt="scooper-labs logo"
                />
              </Box>
              <Text
                textAlign={["left", "left", "left", "end"]}
                fontWeight={500}
                color="secondaryGray.500"
              >
                Scooperlabs {new Date().getFullYear()}
              </Text>
            </Flex>
          </Stack>
        </Stack>
      </ContainerWrapper>
    </Box>
  );
};

export default Footer;
