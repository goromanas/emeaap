import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import Container from "./Container"
import Logo from "./Logo"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
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
