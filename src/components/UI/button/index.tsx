import React from "react"
import { StyledButton } from "./style"

interface Props {
  children?: React.ReactNode
}

export const Button: React.FC<Props> = () => {
  return <StyledButton primary />
}
