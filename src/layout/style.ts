import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const Container = styled.main<Props>`
  width: 144rem;
  max-width: 144rem;
  border: 1px solid red;
`
