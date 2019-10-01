import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Information from './Information'

import PropTypes from 'prop-types'

Animal.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  information: PropTypes.string
}

export default function Animal({ title, picture, information }) {
  const [isInformationVisible, setIsInformationVisible] = useState(false)

  function toggleInformation() {
    setIsInformationVisible(!isInformationVisible)
  }

  return (
    <AnimalStyled onClick={toggleInformation}>
      <img src={picture} alt={title} width="100%" />
      {isInformationVisible && <Information text={information} />}
    </AnimalStyled>
  )
}

const AnimalStyled = styled.section`
  background: white;

  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
`
