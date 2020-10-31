import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import { colors } from '../components/config/colors'
import Perk from '../components/Services/Perk'
import SEO from '../components/seo'
import { media } from '../components/config/media'

const Hero = styled.div`
  min-height: 300px;
  background: url('images/services2.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
`
const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%);
  color: ${({ colors }) => colors.white};
  z-index: 2;
  display: block;

  > h2 {
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  ${media.lg`
    display: none;
  `}
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
    display: none;
    width: 100%;

    ${media.lg`
    display: block;
  `}
  }
`

const Perks = styled.div`
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
`
const Services = () => {
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

  const hero = data.allWordpressWpServices.edges.filter(
    edge => edge.node.title === 'Main'
  )
  const perks = data.allWordpressWpServices.edges.filter(
    edge => edge.node.title !== 'Main'
  )
  return (
    <Layout>
      <SEO title="Services" />
      <Hero>
        <HeroContent
          colors={colors}
          dangerouslySetInnerHTML={{ __html: hero[0].node.content || '' }}
        />
        <Title colors={colors}>
          <h2>Services</h2>
        </Title>
        <Overlay />
      </Hero>
      <Perks colors={colors}>
        {perks.map((perk, index) => (
          <Perk
            title={perk.node.title}
            key={perk.node.id}
            icon={(index + 1) % 2 === 0 ? faConnectdevelop : faBars}
          />
        ))}
      </Perks>
    </Layout>
  )
}

export default Services
