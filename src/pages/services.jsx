import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import Zoom from 'react-reveal/zoom'

import Layout from '../components/layout'
import { colors } from '../components/config/colors'
import Perk from '../components/Services/Perk'

const Hero = styled.div`
  min-height: 300px;
  background: url('images/services2.jpg');
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
      <Hero>
        <HeroContent
          colors={colors}
          dangerouslySetInnerHTML={{ __html: hero[0].node.content || '' }}
        />
        <Overlay />
      </Hero>
      <Perks colors={colors}>
        {perks.map((perk, index) => (
          <Zoom ssrFadeout>
            <Perk
              title={perk.node.title}
              key={perk.node.id}
              icon={(index + 1) % 2 === 0 ? faConnectdevelop : faBars}
            />
          </Zoom>
        ))}
      </Perks>
    </Layout>
  )
}

export default Services
