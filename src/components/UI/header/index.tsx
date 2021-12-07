import React from "react";
import { StyledHeader } from "./style";

interface Props {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = () => {
  return (
    <StyledHeader>
      <span>Blog</span>
      <span>Blog</span>
      <span>Blog</span>
      <span>Blog</span>
    </StyledHeader>
  );
};

export default Header;
