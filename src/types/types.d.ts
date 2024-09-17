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

export interface ContainerWrapperProps extends Partial<ContainerProps> {
  children: ReactNode;
}
