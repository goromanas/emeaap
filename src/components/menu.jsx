import React, { useState } from 'react'
import { Link as UnstyledLink, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { colors } from './config/colors'
import { media } from './config/media'
import Container from './Container'
import Social from './Social/Social'
import Hamburger from './Hamburger/Hamburger'

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
  justify-content: flex-end;
  position: relative;
  align-items: center;

  ${media.md`
    height: 56px;
    justify-content: space-between;
  `}
`

const MenuItem = styled.div`
  padding: 0 0.4rem;
`

const MenuRow = styled.div`
  display: none;

  ${media.md`
    display: flex;
  `}
`

const Link = styled(UnstyledLink)`
  &.active {
    color: ${({ colors }) => colors.white};
  }
`

const StyledSocial = styled(Social)`
  display: none;
  ${media.md`
    display: block;
  `}
`

const StyledHamburger = styled(Hamburger)`
  display: block;
  padding-right: 2rem;
  padding-top: 1.5rem;

  ${media.md`
    display: none;
  `}
`

const MobileContent = styled.div`
  background: ${({ colors }) => colors.darkBlue};
  position: absolute;
  top: 56px;
  left: -1rem;
  width: calc(100% + 2rem);
  height: 300px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${({ menuOpen }) => (menuOpen ? '' : 'translateX(110%)')};
  opacity: ${({ menuOpen }) => (menuOpen ? '1 ' : '0')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  ${media.md`
      transform: translateX(110%);
      opacity: 0;
  `}
`
const MobileItem = styled.div`
  padding: 1rem 0;
  color: ${({ colors }) => colors.white};
  text-transform: uppercase;
`
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
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
          <StyledHamburger
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          />
          <MobileContent colors={colors} menuOpen={menuOpen}>
            {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <MobileItem key={item.object_id} colors={colors}>
                  <Link to={item.url} activeClassName="active" colors={colors}>
                    {item.title}
                  </Link>
                </MobileItem>
              )
            )}
          </MobileContent>
          <StyledSocial color={colors.white} />
        </MenuContent>
      </Container>
    </StyledMenu>
  )
}

export default Menu
