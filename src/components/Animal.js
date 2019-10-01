import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Information from './Information'
import { Heart } from 'styled-icons/boxicons-regular/Heart'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { Place } from 'styled-icons/material/Place'

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
  if (information == null) {
    return (
      <AnimalStyled>
        <img src={picture} alt={title} width="100%" />
      </AnimalStyled>
    )
  } else {
    return (
      <>
        <AnimalStyled onClick={toggleInformation}>
          <img src={picture} alt={title} width="100%" />
          <InfoShort>
            <h3>{title}</h3>
            <div>
              <PlaceStyled />
              <HeartStyled />
            </div>
          </InfoShort>
          <ArrowDownStyled />
          {isInformationVisible && <Information text={information} />}
        </AnimalStyled>
      </>
    )
  }
}
const AnimalStyled = styled.section`
  background: white;

  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  position: relative;
`

const ArrowDownStyled = styled(KeyboardArrowDown)`
  height: 40px;
  position: absolute;
  right: 50%;
  transform: translateX(+25px);
  bottom: 1px;
  color: grey;
`

const HeartStyled = styled(Heart)`
  height: 40px;
  color: plum;
`

const InfoShort = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const PlaceStyled = styled(Place)`
  height: 40px;
  color: plum;
`
