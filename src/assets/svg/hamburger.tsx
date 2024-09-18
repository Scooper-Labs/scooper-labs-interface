"use client";

import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface IHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<IHamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <Box
      display={["flex", "flex", "flex", "none", "none", "none", "none"]}
      justifyContent="flex-end"
      cursor="pointer"
      position="absolute"
      right="0"
      pr="24px"
      zIndex={20000}
    >
      <AnimatePresence mode="popLayout">
        {isOpen ? (
          <motion.div
            key="close-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
          >
            <Box>
              <Image
                src="/img/menu-close-btn.png"
                w={"32px"}
                alt="close-menu"
              />
            </Box>
          </motion.div>
        ) : (
          <motion.div
            key="hamburger-icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClick}
          >
            <Box>
              <Image
                src="/img/hamburger-menu-btn.png"
                w={"32px"}
                alt="open-menu"
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Hamburger;
