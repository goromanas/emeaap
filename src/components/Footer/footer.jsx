import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()} BY EMEA Associated Partners
  </StyledFooter>
)

export default Footer
