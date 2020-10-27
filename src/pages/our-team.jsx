import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '../components/Container'
import Layout from '../components/layout'

const OurTeam = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpServices {
        edges {
          node {
            title
            content
            id
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container>Our team</Container>
    </Layout>
  )
}

export default OurTeam
