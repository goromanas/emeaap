import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from '../components/Container'
import Layout from '../components/layout'

import { colors } from '../components/config/colors'
import Member from '../components/Our-Team/Member'
import SEO from '../components/seo'

const TeamLayout = styled.div`
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const OurTeam = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpOurTeam {
        edges {
          node {
            content
            title
            featured_media {
              source_url
            }
            acf {
              email
              linkedin
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Our team" />
      <TeamLayout colors={colors}>
        <StyledContainer>
          {data.allWordpressWpOurTeam.edges.map(member => (
            <Member
              name={member.node.title}
              content={member.node.content}
              image={member.node.featured_media.source_url}
              email={member.node.acf.email}
              linkedin={member.node.acf.linkedin}
            />
          ))}
        </StyledContainer>
      </TeamLayout>
    </Layout>
  )
}

export default OurTeam
