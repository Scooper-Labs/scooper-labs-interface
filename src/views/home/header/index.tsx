"use client";

import React, { useState } from "react";
import {
  Box,
  Link as ChakraLink,
  HStack,
  Flex,
  Circle,
} from "@chakra-ui/react";
import { NavLink } from "./type";
import Menu from "./menu";
import Hamburger from "@/assets/svg/hamburger";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "The Mission",
      link: "#TheMission",
    },
    {
      name: "Products",
      link: "#OurProducts",
    },
    {
      name: "Our Why",
      link: "#OurWhy",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <Box
      position="sticky"
      top={0}
      width="100vw"
      zIndex="40"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt="32px"
      px={4}
      mixBlendMode="difference"
    >
      <Flex
        as="div"
        width="100%"
        justifyContent="center"
        alignItems="center"
        height={{ base: "56px", md: "52px" }}
        padding={{ base: "12px", md: "10px 12px" }}
      >
        <HStack
          display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
          zIndex={9999}
        >
          {navLinks.map(({ name, link }, i) => (
            <React.Fragment key={i}>
              <Box
                position="relative"
                overflow="hidden"
                mixBlendMode="difference"
              >
                <ChakraLink
                  href={link}
                  target={link.startsWith("http") ? "_blank" : "_self"}
                  px={2}
                  py={2}
                  fontWeight={500}
                  fontSize="16px"
                  color="white" // Set to white for best contrast
                >
                  {name}
                </ChakraLink>
              </Box>
              {i < navLinks.length - 1 && (
                <Circle bgColor="brandPrimary.100" size="3px" mx={2} />
              )}
            </React.Fragment>
          ))}
        </HStack>

        <HStack>
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />

          <Menu
            menuOpen={isMenuOpen}
            setMenuOpen={setIsMenuOpen}
            links={navLinks}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default LandingHeader;
