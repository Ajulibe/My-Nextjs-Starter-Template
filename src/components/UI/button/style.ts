import styled from "styled-components"

interface Props {
  bgColor?: string
  primary?: boolean
}

export const StyledButton = styled.button<Props>`
  background-color: ${(props) =>
    props.primary ? "red" : props.bgColor ? props.bgColor : "red"};
`
