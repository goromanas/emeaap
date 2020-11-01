import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon as UnstyledFontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { icons } from '../config/icons'
import { colors } from '../config/colors'

const FontAwesomeIcon = styled(UnstyledFontAwesomeIcon)`
  color: ${({ color }) => color};
  margin: 0 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease 0s;

  &:hover {
    /* color: rgba(10, 118, 198, 0.9); */
    color: ${({ colors }) => colors.accent};
    transform: translateY(-2px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  }
`

const Social = ({ color = '#fff', className = '' }) => (
  <div className={className}>
    {icons.map((icon, index) => (
      <React.Fragment key={index}>
        <a
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          data-tip={icon.tooltip}
        >
          <FontAwesomeIcon icon={icon.icon} color={color} colors={colors} />
        </a>
        <ReactTooltip />
      </React.Fragment>
    ))}
  </div>
)

export default Social
