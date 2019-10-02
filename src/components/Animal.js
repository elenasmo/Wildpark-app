import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Information from './Information'
import { Heart } from 'styled-icons/boxicons-regular/Heart'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp'
import { Place } from 'styled-icons/material/Place'

import PropTypes from 'prop-types'

Animal.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  station: PropTypes.number,
  information: PropTypes.string
}

export default function Animal({ title, picture, station, information }) {
  const [isInformationVisible, setIsInformationVisible] = useState(false)
  const [isArrowActive, setIsArrowActive] = useState(true)

  function toggleInformation() {
    setIsInformationVisible(!isInformationVisible)
    setIsArrowActive(!isArrowActive)
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
        <AnimalStyled>
          <img src={picture} alt={title} width="100%" />
          <section>
            <TitleStyled>{title}</TitleStyled>
            <div>
              <StationStyled>{station}</StationStyled>
              <PlaceStyled />
              <HeartStyled />
            </div>
          </section>
          <button onClick={toggleInformation} active={isArrowActive}>
            {isArrowActive ? <ArrowDownStyled /> : <ArrowUpStyled />}
          </button>
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

  & section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
  }
  & p {
    padding: 10px;
  }

  & div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const TitleStyled = styled.p`
  font-size: 1.2em;
`

const ArrowDownStyled = styled(KeyboardArrowDown)`
  height: 40px;
  position: absolute;
  right: 50%;
  transform: translateX(+25px);
  bottom: 1px;
  color: grey;
`

const ArrowUpStyled = styled(KeyboardArrowUp)`
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

const PlaceStyled = styled(Place)`
  height: 40px;
  color: plum;
`
const StationStyled = styled.div`
  background-color: plum;
  height: 40px;
  width: 40px;
  color: white;
  border-radius: 50%;
  justify-self: center;
  align-self: center;
`
