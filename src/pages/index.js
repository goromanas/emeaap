import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/Home/video"
import "../styles/global.scss"
import Perks from "../components/Home/perks"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Video />
      <Perks />
    </Layout>
  )
}

export default IndexPage
