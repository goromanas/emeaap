import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../config/colors'

const StyledButton = styled.button`
  border: none;
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 40px;
  transition: all 0.3s ease 0s;
  outline: none;

  &:hover {
    background: ${({ colors }) => colors.darkBlue};
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
`

const Button = () => (
  <Link to="/contact">
    <StyledButton colors={colors}>Contact us</StyledButton>
  </Link>
)

export default Button
