"use client";
import { ReactNode } from "react";
import "@/styles/page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "../theme/theme";
import RootProvider from "@/components/RootProvider";

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <RootProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>{" "}
      </RootProvider>
    </CacheProvider>
  );
}
