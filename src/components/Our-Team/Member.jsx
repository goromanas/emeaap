import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const StyledMember = styled.div`
  margin: 2rem 0;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled.img`
  width: 250px;
  max-height: 120px;
  width: auto;
  object-fit: cover;
  border: 2px solid #fff;
  border-radius: 2rem;
`

const Title = styled.h2`
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 300;
`

const Content = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: justify;
`

const Social = styled.div`
  display: flex;
`

const FontAwesomeIcon = styled(UnstyledFontAwesomeIcon)`
  margin: 0 0.2rem;
`

const Member = ({
  name = '',
  content = '',
  image = '',
  linkedin = '',
  email = '',
}) => {
  return (
    <StyledMember>
      <StyledImage src={image} alt={name} />
      <Title>{name}</Title>
      <Social>
        {email && <FontAwesomeIcon icon={faEnvelope} size="1x" />}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        )}
      </Social>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </StyledMember>
  )
}

export default Member
