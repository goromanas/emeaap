import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledPerk = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

const FontAwesomeIcon = styled(UnstyledFontAwesomeIcon)`
  font-size: 3rem;
`

function Perk({ title = '', icon = '' }) {
  return (
    <StyledPerk data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
      <Row>
        <FontAwesomeIcon icon={icon} />
      </Row>
      <Row>{title}</Row>
    </StyledPerk>
  )
}

export default Perk
