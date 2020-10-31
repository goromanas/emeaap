import React from 'react'
import styled from 'styled-components'

import { media } from '../components/config/media'

const StyledContainer = styled.div`
  padding: 0 1rem;
  margin: 0 auto;

  ${media.md`
    max-width: 1140px;
    padding: 0;
  `}
`

const Container = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
