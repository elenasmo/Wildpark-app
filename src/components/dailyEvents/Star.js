import React from 'react'
import styled from 'styled-components/macro'

export default function Star({ active = false, onClick }) {
  return <StarsStyled active={active} onClick={onClick} />
}
const StarsStyled = styled.div`
  cursor: pointer;
  width: 1em;
  height: 1em;
  background-color: ${props => (props.active ? 'rgb(255, 180, 0)' : 'grey')};
  -webkit-clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
  clip-path: polygon(
    50% 0%,
    63% 38%,
    100% 38%,
    69% 59%,
    82% 100%,
    50% 75%,
    18% 100%,
    31% 59%,
    0% 38%,
    37% 38%
  );
`
