import React from 'react'
import { Link as UnstyledLink, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { colors } from './config/colors'
import Container from './Container'
import Social from './Social/Social'

const StyledMenu = styled.div`
  background-color: ${({ colors }) => colors.grey};
  height: 56px;

  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }

  &.active {
    color: #fff;
  }
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  justify-content: space-between;
`

const MenuItem = styled.div`
  padding: 0 0.4rem;
`

const MenuRow = styled.div`
  display: flex;
`

const Link = styled(UnstyledLink)`
  &.active {
    color: ${({ colors }) => colors.white};
  }
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
          <MenuRow>
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <MenuItem key={item.object_id}>
                  <Link to={item.url} activeClassName="active" colors={colors}>
                    {item.title}
                  </Link>
                </MenuItem>
              )
            )}
          </MenuRow>
          <Social color={colors.white} />
        </MenuContent>
      </Container>
    </StyledMenu>
  )
}

export default Menu
