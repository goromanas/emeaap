import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Timeline } from 'antd'

const Wrapper = styled.div`
  color: #fff;
`

const StyledTimeline = styled(Timeline)`
  color: #fff;
`

const StyledInfo = styled.div`
  padding: 0 2rem;
`

const Info = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(filter: { title: { eq: "Contact" } }) {
        edges {
          node {
            title
            content
          }
        }
      }
      allWordpressWpLocations {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const cities = data.allWordpressWpLocations.edges
    .map(location => {
      return location.node.title
    })
    .sort()
  return (
    <StyledInfo className={className}>
      {/* <h1>Contact us</h1> */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWordpressPost.edges[0].node.content,
        }}
      />
      <Wrapper>
        <StyledTimeline>
          {cities.map(city => (
            <StyledTimeline.Item key={city}>{city}</StyledTimeline.Item>
          ))}
        </StyledTimeline>
      </Wrapper>
    </StyledInfo>
  )
}

export default Info
