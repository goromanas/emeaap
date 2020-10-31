import React from 'react'
import styled from 'styled-components'
import Form from '../components/Contact/Form'
import Container from '../components/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../components/config/colors'

const Wrapper = styled.div`
  background: ${({ colors }) => colors.blue};
  min-height: 100vh;
  color: ${({ colors }) => colors.white};
`

const Contact = () => (
  <Layout>
    <SEO title="Contact us" />
    <Wrapper colors={colors}>
      <Container>
        <Form />
        {/* <Map /> */}
      </Container>
    </Wrapper>
  </Layout>
)

export default Contact
