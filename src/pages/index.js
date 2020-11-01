import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/Home/video'
import '../styles/global.scss'
import Perks from '../components/Home/perks'
import Carousel from '../components/Carousel/Carousel'

import { media } from '../components/config/media'

const StyledCarousel = styled(Carousel)`
  display: none;

  ${media.sm`
    display: block;
  `}
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Video />
      <StyledCarousel />
      <Perks />
    </Layout>
  )
}

export default IndexPage
