import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../config/colors'

const StyledButton = styled.span`
  width: 100px;
  height: 50px;
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`

const Button = () => (
  <Link to="/contact">
    <StyledButton colors={colors}>Contact us</StyledButton>
  </Link>
)

export default Button
