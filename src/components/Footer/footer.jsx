import React from 'react'
import styled from 'styled-components'
import { colors } from '../config/colors'
import Social from '../Social/Social'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
`

const Row = styled.div`
  margin: 1rem 0;

  > h4 {
    font-weight: 500;
    font-size: 1.25rem;
    color: #000;
  }
`

const Footer = ({ siteTitle = '' }) => (
  <StyledFooter>
    <Row>
      <h4>{siteTitle}</h4>
    </Row>
    <Row>
      <Social color={colors.darkGrey} />
    </Row>
    <Row>© {new Date().getFullYear()} BY EMEA Associated Partners</Row>
  </StyledFooter>
)

export default Footer
