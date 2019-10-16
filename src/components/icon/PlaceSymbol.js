import styled from 'styled-components/macro'
import React from 'react'

export default function PlaceSymbol() {
  return (
    <>
      <PlaceStyled1 />
    </>
  )
}

const PlaceStyled1 = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
  background-color: plum;
`
