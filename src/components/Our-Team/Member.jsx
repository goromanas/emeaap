import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { colors } from '../config/colors'

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
  font-size: 1.2rem;
  color: ${({ colors }) => colors.white};

  &:hover {
    color: #c4c71e;
    transform: translateY(-2px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
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
        {email && (
          <a href={`mailto:${email}`}>
            <FontAwesomeIcon icon={faEnvelope} colors={colors} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} colors={colors} />
          </a>
        )}
      </Social>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </StyledMember>
  )
}

export default Member
