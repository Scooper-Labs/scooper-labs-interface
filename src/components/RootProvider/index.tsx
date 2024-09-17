"use client";

import type { FC } from "react";
import { ProvidersProps } from "@/types/types";
import Providers from "../Providers";

const RootProvider: FC<ProvidersProps> = ({ children }) => {
  return <Providers>{children}</Providers>;
};

export default RootProvider;
