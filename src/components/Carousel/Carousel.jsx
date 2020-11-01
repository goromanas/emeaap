import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import ReactTooltip from 'react-tooltip'

import '../../../node_modules/slick-carousel/slick/slick.scss'
import '../../../node_modules/slick-carousel/slick/slick-theme.scss'

const Wrapper = styled.div`
  height: 75px;
  max-width: 75%;
  margin: 0 auto;
`
const Image = styled.img`
  max-height: 50px;
  outline: none;
`

const Container = styled.div`
  outline: none;
  /* display: flex;
  justify-content: space-between; */
`

const Carousel = ({ className }) => {
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
            title
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
    <Wrapper className={className}>
      <Slider {...settings}>
        {data.allWordpressWpSlider.edges.map(edge => (
          <Container key={edge.node.id}>
            <Image
              src={edge.node.featured_media.localFile.childImageSharp.fluid.src}
              data-tip={edge.node.title}
            />
            <ReactTooltip />
          </Container>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Carousel
