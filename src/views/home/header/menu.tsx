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
          top="110%"
          right="0"
          width="100%"
          h="100vh"
          bg="brandScooper.200"
          // pt="8"
          zIndex={9999}
          display="flex"
          flexDirection="column"
        >
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
