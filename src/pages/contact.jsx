import React from 'react'
import styled from 'styled-components'

import Form from '../components/Contact/Form'
import Container from '../components/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactMap from '../components/Contact/ContactMap'

import { colors } from '../components/config/colors'
import { media } from '../components/config/media'
import Info from '../components/Contact/Info'

const Wrapper = styled.div`
  background: ${({ colors }) => colors.blue};
  min-height: 100vh;
  color: ${({ colors }) => colors.white};
`

const StyledContainer = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0;
  flex-wrap: wrap;
`

const StyledInfo = styled(Info)`
  padding-top: 4rem;
  ${media.md`
    padding: 0;
  `}
`

const Title = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    color: #fff;
    text-transform: uppercase;
  }
`

const StyledForm = styled(Form)`
  padding-bottom: 2rem;
  ${media.md`
    padding-bottom: 0;
  `}
`
const Contact = () => (
  <Layout>
    <SEO title="Contact us" />
    <Wrapper colors={colors}>
      {typeof window !== 'undefined' ? <ContactMap /> : null}
      <Title>
        <h1>Contact us</h1>
      </Title>
      <StyledContainer>
        <StyledForm />
        <StyledInfo />
      </StyledContainer>
    </Wrapper>
  </Layout>
)

export default Contact
