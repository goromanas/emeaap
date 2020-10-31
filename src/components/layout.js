/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer/footer'

const Container = styled.div`
  padding-top: 1rem;
  overflow: hidden;
  margin: 0 auto;
  /* min-height: 100vh;
  min-width: 100vh; */
`
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
    <Container>
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
