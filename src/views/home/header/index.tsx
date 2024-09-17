"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      link: "#mission",
    },
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "Our Why",
      link: "#why",
    },
    {
      name: "Blog",
      link: "#",
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <Box
      position="fixed"
      width="100vw"
      zIndex="40"
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt={6}
      px={4}
    >
      <Flex
        as="div"
        width="100%"
        justifyContent="center"
        alignItems="center"
        height={{ base: "56px", md: "52px" }}
        padding={{ base: "12px", md: "10px 12px" }}
        backgroundColor="transparent"
      >
        <HStack display={{ base: "none", md: "none", lg: "flex" }}>
          {navLinks.map(({ name, link }, i) => (
            <React.Fragment key={i}>
              <ChakraLink
                href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                px={2}
                py={2}
                fontWeight={500}
                fontSize="16px"
                color="white"
                // blendMode="difference"
                mixBlendMode="difference"
                style={{ textDecoration: "none" }}
              >
                {name}
              </ChakraLink>
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
