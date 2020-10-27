import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { colors } from './config/colors'
import Container from './Container'

const StyledMenu = styled.div`
  background-color: ${({ colors }) => colors.grey};
  height: 56px;
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
`

const MenuItem = styled.div`
  padding: 0 0.4rem;
`

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            slug
            name
            items {
              title
              url
              object_id
            }
          }
        }
      }
    }
  `)

  return (
    <StyledMenu colors={colors}>
      <Container>
        <MenuContent>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem key={item.object_id}>
                <Link to={item.url}>{item.title}</Link>
              </MenuItem>
            )
          )}
        </MenuContent>
      </Container>
    </StyledMenu>
  )
}

export default Menu
