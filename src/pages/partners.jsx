import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import { colors } from '../components/config/colors'
import SEO from '../components/seo'
import Container from '../components/Container'
import Partner from '../components/Partners/Partner'
import HeroImage from '../../static/images/city2.jpg'

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

  > p {
    margin-bottom: 1rem;
  }
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

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`

const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPartners {
        edges {
          node {
            acf {
              partners_website
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            content
            title
            id
          }
        }
      }
    }
  `)
  const hero = data.allWordpressWpPartners.edges.filter(
    edge => edge.node.title === 'Main'
  )

  const content = data.allWordpressWpPartners.edges.filter(
    edge => edge.node.title !== 'Main'
  )
  // const partners = data.allWordpressWpPartners.edges.filter(
  //   edge => edge.node.title !== 'Main'
  // )
  return (
    <Layout>
      <SEO title="Partners" />
      <Hero background={HeroImage}>
        <HeroContent
          colors={colors}
          dangerouslySetInnerHTML={{ __html: hero[0].node.content || '' }}
        />
        <Overlay />
      </Hero>
      <StyledContainer>
        {content.map(partner => (
          <Partner
            key={partner.node.id}
            title={partner.node.title}
            image={
              partner.node.featured_media.localFile.childImageSharp.fluid.src
            }
            content={partner.node.content}
            link={partner.node.acf.partners_website}
          />
        ))}
      </StyledContainer>
    </Layout>
  )
}

export default Partners
