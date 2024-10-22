import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../Container'

import { colors } from '../config/colors'
import Button from '../Button/Button'
import { media } from '../config/media'

import Video1 from '../../../static/videos/stockholm3.mp4'
import Video2 from '../../../static/videos/stockholm3.webm'

const VideoWrapper = styled.div`
  position: relative;
  max-height: 700px;
  color: ${({ colors }) => colors.white};
`

const StyledVideo = styled.video`
  width: 100%;
  max-height: 700px;
  object-fit: cover;
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

    ${media.lg`
      display: block;
    `}
  }

  > h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.5rem;

    ${media.md`
      font-size: 4rem;
    `}
  }

  > h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 100;
    font-style: italic;

    ${media.md`
      font-size: 2rem;
    `}
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
      <VideoWrapper colors={colors}>
        <StyledVideo
          poster="images/stockholm.png"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src={Video1} muted autoPlay />
          <source src={Video2} muted autoPlay />
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
