import React from "react"
import styled from "styled-components"

const StyledPerk = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  font-size: 2.5rem;
`

function Perk({ title = "" }) {
  return <StyledPerk>{title}</StyledPerk>
}

export default Perk
