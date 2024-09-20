import { ReactNode } from "react";
import { ContainerProps } from "@chakra-ui/react";

export type FooterLink = {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
};

export interface LinksProps {
  name: string;
  link: string;
}

export interface ProvidersProps {
  children: ReactNode;
}

export interface ContainerWrapperProps extends Partial<ContainerProps> {
  children: ReactNode;
}
