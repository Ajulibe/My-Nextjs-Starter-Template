import styled from "styled-components"

interface Props {
  bgColor?: string
}

export const StyledHeader = styled.div<Props>`
  height: 70px;
  min-width: 100%;
  background-color: purple;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: white;
  padding: 0 40px 0 40px;
`
