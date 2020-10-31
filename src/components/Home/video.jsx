import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../Container'

import { colors } from '../config/colors'
import Button from '../Button/Button'
import { media } from '../config/media'

const VideoWrapper = styled.div`
  position: relative;
  height: auto;
`

const StyledVideo = styled.video`
  max-width: 100%;
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ colors }) => colors.white};
  padding: 1rem;
  text-align: center;
`

const Content = styled.div`
  > p {
    margin: 2rem 0;
    display: none;

    ${media.md`
      display: block;
    `}
  }

  > h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 4rem;
  }

  > h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 100;
    font-style: italic;
  }

  > p {
    font-size: 1.1rem;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
`

const Video = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(filter: { title: { eq: "Hero" } }) {
        edges {
          node {
            content
            title
            id
          }
        }
      }
      allWordpressWpMedia(
        filter: { id: { eq: "6b8820d8-364f-5574-8136-f5e6b38e79b8" } }
      ) {
        edges {
          node {
            source_url
          }
        }
      }
    }
  `)
  return (
    <>
      <VideoWrapper>
        <StyledVideo
          poster="images/stockholm.png"
          loop
          muted
          autoPlay
          playsInline
        >
          <source
            src={data.allWordpressWpMedia.edges[0].node.source_url}
            muted
            autoPlay
          />
          {/* <source src="videos/stockholm3.webm" muted autoPlay /> */}
          I'm sorry; your browser doesn't support HTML5 video.
        </StyledVideo>
        <Overlay />
        <Container>
          <ContentWrapper colors={colors}>
            <Content
              dangerouslySetInnerHTML={{
                __html: data.allWordpressPost.edges[0].node.content,
              }}
            />
            <Button />
          </ContentWrapper>
        </Container>
      </VideoWrapper>
    </>
  )
}

export default Video
