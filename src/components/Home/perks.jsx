import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import Zoom from 'react-reveal/zoom'

import Container from '../Container'
import { colors } from '../config/colors'

const StyledPerks = styled.div`
  background: ${({ colors }) => colors.blue};
  color: ${({ colors }) => colors.white};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const Perk = styled.div`
  padding: 5rem 0;
  font-size: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    text-align: center;
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: 4rem 0;
`

const Perks = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPerks {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `)
  return (
    <StyledPerks colors={colors}>
      <Container>
        <Wrapper>
          {data.allWordpressWpPerks.edges.map((edge, index) => (
            <Zoom ssrFadeout>
              <Perk key={edge.node.id}>
                <StyledFontAwesomeIcon
                  icon={(index + 1) % 2 === 0 ? faConnectdevelop : faBars}
                  size="2x"
                />
                <p>{edge.node.title}</p>
              </Perk>
            </Zoom>
          ))}
        </Wrapper>
      </Container>
    </StyledPerks>
  )
}

export default Perks
