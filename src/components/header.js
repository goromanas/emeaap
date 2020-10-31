import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Menu from './menu'
import Container from './Container'
import Logo from './Logo'

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  padding-left: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Title>{siteTitle}</Title>
        </Wrapper>
      </Container>
      <Menu />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
