"use client";

import { Box } from "@chakra-ui/react";

import HeroSection from "./hero";
// import SectionOne from "./sections/SectionOne";
// import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import LandingHeader from "./header";
import Footer from "./sections/Footer";

export default function HomeView() {
  return (
    <Box bgColor="#0d0d0f" h="full" w="full">
      <LandingHeader />
      <HeroSection />

      {/*  
      <SectionOne />
      <SectionTwo /> */}
      <SectionThree />

      <Footer />
    </Box>
  );
}
