import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/Container'
import Layout from '../components/layout'

import { colors } from '../components/config/colors'
import SEO from '../components/seo'

const Hero = styled.div`
  min-height: 300px;
  background: url(${({ background }) => background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
`

const HeroContent = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%);
  color: ${({ colors }) => colors.white};
  z-index: 2;
  /* background: rgba(0, 0, 0, 0.2); */
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
`

const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPartners {
        edges {
          node {
            title
            content
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)
  const hero = data.allWordpressWpPartners.edges.filter(
    edge => edge.node.title === 'Main'
  )
  const partners = data.allWordpressWpPartners.edges.filter(
    edge => edge.node.title !== 'Main'
  )
  return (
    <Layout>
      <SEO title="Partners" />
      <Hero background={hero[0].node.featured_media.source_url}>
        <HeroContent
          colors={colors}
          dangerouslySetInnerHTML={{ __html: hero[0].node.content || '' }}
        />
        <Overlay />
      </Hero>
    </Layout>
  )
}

export default Partners
