import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/Container"
import AboutSection from "../components/About-us/About-section"

import { images } from "../components/About-us/images"
import { colors } from "../components/config/colors"

const StyledContainer = styled(Container)`
  max-width: 100%;
`

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpAboutus {
        edges {
          node {
            title
            content
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <StyledContainer>
        {data.allWordpressWpAboutus.edges.map((edge, index) => (
          <AboutSection
            title={edge.node.title}
            content={edge.node.content}
            image={images[index]}
            color={(index + 1) % 2 === 0 ? colors.darkBlue : colors.blue}
          />
        ))}
      </StyledContainer>
    </Layout>
  )
}

export default AboutUs