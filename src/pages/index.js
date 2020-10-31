import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/Home/video'
import '../styles/global.scss'
import Perks from '../components/Home/perks'
import Carousel from '../components/Carousel/Carousel'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Video />
      <Carousel />
      <Perks />
    </Layout>
  )
}

export default IndexPage
