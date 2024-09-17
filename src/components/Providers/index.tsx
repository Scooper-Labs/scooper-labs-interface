"use client";

import { ProvidersProps } from "@/types/types";
import { ChakraProvider } from "@chakra-ui/react";
import type { FC } from "react";
const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ChakraProvider data-testid="chakra_prov">{children}</ChakraProvider>;
};

export default Providers;
