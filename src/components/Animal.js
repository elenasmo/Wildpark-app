import React from 'react'
import styled from 'styled-components/macro'

//import PropTypes from 'prop-types'

export default function Animal({ title, picture }) {
  return (
    <AnimalStyled>
      <img src={picture} alt={title} width="100%" />
      <h2>{title}</h2>
    </AnimalStyled>
  )
}

const AnimalStyled = styled.section`
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
`
