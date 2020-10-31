import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { icons } from '../config/icons'

const FontAwesomeIcon = styled(UnstyledFontAwesomeIcon)`
  color: ${({ color }) => color};
  margin: 0 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease 0s;

  &:hover {
    /* color: rgba(10, 118, 198, 0.9); */
    color: #c4c71e;
    transform: translateY(-2px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
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
