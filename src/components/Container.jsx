import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

const Container = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
