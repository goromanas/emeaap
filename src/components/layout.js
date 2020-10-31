/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer/footer'
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wordpressSiteMetadata {
        name
      }
    }
  `)

  return (
    <Container fluid>
      <Header siteTitle={data.wordpressSiteMetadata.name} />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.wordpressSiteMetadata.name} />
      </div>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
