import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Information from './Information'
import { HeartOutline } from 'styled-icons/typicons/HeartOutline'
import { HeartFullOutline } from 'styled-icons/typicons/HeartFullOutline'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { KeyboardArrowUp } from 'styled-icons/material/KeyboardArrowUp'
import { Place } from 'styled-icons/material/Place'

import PropTypes from 'prop-types'

Animal.propTypes = {
  title: PropTypes.string,
  picture: PropTypes.string,
  station: PropTypes.number,
  information: PropTypes.string,
  isLiked: PropTypes.bool
}

export default function Animal({
  title,
  picture,
  station,
  information,
  latitude,
  longitude,
  icon,
  onLikeClick,
  isLiked
}) {
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
      <AnimalStyled>
        <img src={picture} alt={title} width="100%" />
        <section>
          <TitleStyled>{title}</TitleStyled>
          <div>
            {/* <StationStyled>{station}</StationStyled> */}
            <Link
              to={{
                pathname: '/map',
                initAnimal: { title, station, latitude, longitude, icon }
              }}
            >
              <PlaceStyled />
            </Link>
            <ButtonStyled onClick={toggleLikeButton}>
              {isLiked ? <HeartFilledStyled /> : <HeartStyled />}
            </ButtonStyled>
          </div>
        </section>
        <ArrowButton onClick={toggleInformation}>
          {isArrowActive ? <ArrowDownStyled /> : <ArrowUpStyled />}
        </ArrowButton>
        {isInformationVisible && <Information text={information} />}
      </AnimalStyled>
    )
  }
  function toggleLikeButton(event) {
    event.stopPropagation()
    onLikeClick()
  }
}
const AnimalStyled = styled.section`
  background: white;
  box-shadow: 0 10px 10px #0002;
  position: relative;
  img {
    vertical-align: middle;
  }

  section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }
  }
  p {
    padding: 10px;
  }
`

const TitleStyled = styled.p`
  font-size: 1.2em;
  margin: 0;
`
const ArrowButton = styled.button`
  position: absolute;
  right: 50%;
  transform: translateX(+25px);
  bottom: 1px;
  border: none;
  outline: none;
  background-color: transparent;
`

const ArrowDownStyled = styled(KeyboardArrowDown)`
  height: 40px;
  color: grey;
`

const ArrowUpStyled = styled(KeyboardArrowUp)`
  height: 40px;
  color: grey;
`
const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`

const HeartStyled = styled(HeartOutline)`
  height: 40px;
  color: #467335;
  outline: none;
`

const HeartFilledStyled = styled(HeartFullOutline)`
  height: 40px;
  color: #467335;
`

const PlaceStyled = styled(Place)`
  height: 40px;
  color: #467335;
`
const StationStyled = styled.div`
  height: 35px;
  width: 35px;
  color: #823d85;
  font-style: bold;
  border-radius: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 3px solid #823d85;
  outline: none;
`
