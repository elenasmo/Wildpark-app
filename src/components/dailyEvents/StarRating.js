import React from 'react'
import styled from 'styled-components/macro'
import Star from './Star'

export default function StarRating({
  totalStars = 5,
  activeStars,
  starsSelected,
  selectStar
}) {
  const isActive = i => {
    if (activeStars != null) {
      return i < activeStars
    } else {
      return i < starsSelected
    }
  }
  function getOnClick(i) {
    if (selectStar) {
      return _ => selectStar(i + 1)
    } else {
      return _ => _
    }
  }

  return (
    <RatingStyled>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          active={isActive(i)}
          value={starsSelected}
          onClick={getOnClick(i)}
        />
      ))}
    </RatingStyled>
  )
}

const RatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  p {
    padding: 10px;
  }
`
