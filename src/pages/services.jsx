import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
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
  top: 50%;
  transform: translate(-50%);
  color: ${({ colors }) => colors.white};
  background: rgba(0, 0, 0, 0.2);
`

const Perks = styled.div`
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
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
      </Hero>
      <Perks colors={colors}>
        {perks.map(perk => (
          <Perk title={perk.node.title} key={perk.node.id} />
        ))}
      </Perks>
    </Layout>
  )
}

export default Services
