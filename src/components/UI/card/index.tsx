import React from "react";
import { StyledCard } from "./style";

interface Props {
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = () => {
  return <StyledCard />;
};
