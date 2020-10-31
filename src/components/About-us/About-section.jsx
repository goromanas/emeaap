import React from 'react'
import styled from 'styled-components'

import { media } from '../config/media'

const Section = styled.div`
  min-height: 475px;
  display: flex;
  flex-direction: row;
`

const ImageWrapper = styled.div`
  background-image: url(${({ image }) => image});
  height: 475px;
  background-attachment: fixed;
  display: none;
  flex: 1;

  ${media.md`
    display: block;
  `}
`

const Content = styled.div`
  display: flex;
  background: ${({ color }) => color};
  color: #fff;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

const Text = styled.div`
  > p {
    margin: 2rem;
  }
`

const AboutSection = ({ title = '', content = '', image = '', color = '' }) => {
  return (
    <Section>
      <ImageWrapper image={image} />
      <Content color={color}>
        <h1
          data-sal="flip-up"
          data-sal-delay="1200"
          data-sal-duration="2500"
          data-sal-easing="ease"
        >
          {title}
        </h1>
        <Text
          dangerouslySetInnerHTML={{ __html: content }}
          data-sal="flip-up"
          data-sal-delay="1200"
          data-sal-duration="2500"
          data-sal-easing="ease"
        />
      </Content>
    </Section>
  )
}

export default AboutSection
