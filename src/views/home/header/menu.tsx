import { AnimatePresence, motion } from "framer-motion";
import { MenuProps } from "./type";
import { Box, Link as ChakraLink, HStack, Image } from "@chakra-ui/react";

const Menu = ({ menuOpen, setMenuOpen, links }: MenuProps) => {
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          position="absolute"
          top="0"
          right="0"
          width="100%"
          h="100vh"
          bg="#0D0D0F"
          zIndex={9999}
          display="flex"
          flexDirection="column"
        >
          {/* ----------------------- Side-Img-illustration ---------------------- */}

          <Box position="absolute" top="0" left="0">
            <Image
              src="/img/drawer-side-lines.png"
              alt="side illustration"
              objectFit="cover"
            />
          </Box>

          {/* --------------------- To-the-Top (Mobile screen***** 390px) --------------------- */}
          <Box position="absolute" top="0" left="10" zIndex={-1}>
            <Image
              src="/img/top-left-cube-side.png"
              alt="top cube illustration"
              objectFit="cover"
              width="157.5px"
              height="86.25px"
            />
          </Box>

          {/* --------------------- To-the-Bottom (Mobile screen***** 390px) --------------------- */}
          <Box position="absolute" bottom="0" zIndex={-1}>
            <Image
              src="/img/bottom-left-cube.png"
              alt="bottom cube illustration"
              objectFit="inherit"
              width="157.5px"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            pr="24px"
            position="fixed"
            bottom="0"
            width="100%"
            pb="40px"
            bg="transparent"
            zIndex={9999}
            gap={3}
          >
            {/* -------------------- Scooper Labs Products ---------------------- */}
            <HStack gap={5} mb="32px">
              <Box>
                <Image
                  src="/img/assetscooper-logo.png"
                  w={"60px"}
                  alt="assetscooper logo"
                />
              </Box>
              <Box>
                <Image
                  src="/img/blockrepo-logo.png"
                  w={"60px"}
                  alt="blockrepo logo"
                />
              </Box>
            </HStack>

            {/* -------------------- Nav Links ---------------------- */}
            {links.map(({ name, link }, index) => (
              <ChakraLink
                key={index}
                href={link}
                target={link.startsWith("http") ? "_blank" : "_self"}
                fontSize="32px"
                fontWeight={500}
                textAlign="center"
                color="white"
                style={{
                  textDecoration: "none",
                }}
                onClick={handleLinkClick}
              >
                {name}
              </ChakraLink>
            ))}
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default Menu;
