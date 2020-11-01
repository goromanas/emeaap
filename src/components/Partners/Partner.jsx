import React from 'react'
import styled from 'styled-components'
import { Card as UnstyledCard } from 'antd'

const Card = styled(UnstyledCard)`
  margin: 1rem 2rem;
  padding: 0.5rem;
  max-width: 250px;
`
const Image = styled.img`
  width: 240px;
  height: auto;
`

const { Meta } = Card

const Partner = ({ title = '', image = '', content = '', link = '' }) => {
  content = content.replace(/(<([^>]+)>)/gi, '')
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card hoverable cover={<Image alt={title} src={image} />}>
        <Meta title={title} description={content} />
      </Card>
    </a>
  )
}

export default Partner
