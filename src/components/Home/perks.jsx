import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../Container"
import { colors } from "../config/colors"

const StyledPerks = styled.div`
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const Perk = styled.div`
  padding: 5rem;
  margin: 2rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
`

const Perks = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPerks {
        edges {
          node {
            title
          }
        }
      }
    }
  `)
  return (
    <StyledPerks colors={colors}>
      <Container>
        <Wrapper>
          {data.allWordpressWpPerks.edges.map(edge => (
            <Perk>
              <i class="fab fa-connectdevelop" />
              <i class="fas fa-bars" />
              {edge.node.title}
            </Perk>
          ))}
        </Wrapper>
      </Container>
    </StyledPerks>
  )
}

export default Perks
