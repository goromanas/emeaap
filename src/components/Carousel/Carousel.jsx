import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

import '../../../node_modules/slick-carousel/slick/slick.scss'
import '../../../node_modules/slick-carousel/slick/slick-theme.scss'

const Wrapper = styled.div`
  height: 55px;
  padding: 0 50%;
`
const Image = styled.img`
  max-height: 50px;
  outline: none;
`

const Container = styled.div`
  outline: none;
  display: flex;
  justify-content: space-between;
`

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  }
  const data = useStaticQuery(graphql`
    {
      allWordpressWpSlider {
        edges {
          node {
            id
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Slider {...settings}>
        {data.allWordpressWpSlider.edges.map(edge => (
          <Container key={edge.node.id}>
            <Image
              src={edge.node.featured_media.localFile.childImageSharp.fluid.src}
            />
          </Container>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Carousel
