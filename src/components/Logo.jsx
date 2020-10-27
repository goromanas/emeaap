import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const StyledLogo = styled.img`
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "logo" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <StyledLogo
      src={data.allFile.edges[0].node.publicURL}
      alt={data.allFile.edges[0].node.name}
    />
  )
}

export default Logo
