import React from "react"
import Container from "../components/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>The page you were looking was not found</h1>
      <p>
        If you believe we should add some additional information, contact us.
      </p>
    </Container>
  </Layout>
)

export default NotFoundPage
