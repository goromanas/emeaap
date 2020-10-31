import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { icons } from '../config/icons'

const FontAwesomeIcon = styled(UnstyledFontAwesomeIcon)`
  color: ${({ color }) => color};
  margin: 0 0.5rem;
  font-size: 1rem;
`

const Social = ({ color = '#fff' }) => (
  <div>
    {icons.map(icon => (
      <a href={icon.link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon.icon} color={color} />
      </a>
    ))}
  </div>
)

export default Social
