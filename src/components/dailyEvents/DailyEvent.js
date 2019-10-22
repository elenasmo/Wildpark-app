import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function DailyEvent({
  title,
  picture,
  information,
  times,
  timesWeekend,
  month,
  onNewComment,
  dailyEvent
}) {
  const [starsSelected, selectStar] = useState(0)
  const [comment, setComment] = useState('')
  const [isRatingVisible, setIsRatingVisible] = useState(false)
  const [average, setAverage] = useState(0)

  useEffect(() => {
    if (dailyEvent != null) {
      const n = dailyEvent.rating.length
      const currentStars = dailyEvent.rating.reduce(
        (acc, curr) => acc + curr.stars,
        0
      )
      const averageStars = Math.round(currentStars / n)
      setAverage(averageStars)
    }
  }, [dailyEvent])

  const Star = ({ active = false, onClick }) => (
    <StarsStyled active={active} onClick={onClick} />
  )

  const StarRating = ({ totalStars = 5, activeStars }) => {
    const isActive = i => {
      if (activeStars != null) {
        return i < activeStars
      } else {
        return i < starsSelected
      }
    }
    return (
      <RatingStyled>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            active={isActive(i)}
            value={starsSelected}
            onClick={() => {
              selectStar(i + 1)
            }}
          />
        ))}
      </RatingStyled>
    )
  }

  return (
    <>
      <EventStyled>
        <img src={picture} alt={title} width="100%" />
        <h3>{title}</h3>
        <div>
          <p>{month}</p>
          <p>{times}</p>
          <p>{timesWeekend}</p>
          <AverageRatingStyled>
            <StarRating activeStars={average} />
            <p>{dailyEvent.rating.length} Bewertungen</p>
          </AverageRatingStyled>
          <button onClick={toggleRating}>Alle Bewertungen anzeigen</button>
          <Scroll>
            {isRatingVisible &&
              dailyEvent.rating.map((rating, index) => {
                return (
                  <CommentStyled key={index}>
                    <StarRating activeStars={rating.stars || 0} />
                    <p>{rating.comment}</p>
                  </CommentStyled>
                )
              })}
          </Scroll>
        </div>
        <FormStyled onSubmit={onHandleSubmit}>
          <label>
            Hat Ihnen die Vorstellung gefallen?
            <StarRating totalStars={5} />
            <textarea
              maxLength="200"
              minLength="1"
              name="comment"
              type="text"
              placeholder="Schreiben Sie hier einen Kommentar!"
              value={comment}
              onChange={event => setComment(event.target.value)}
              rows="3"
            />
          </label>
          <button>Hinzufügen</button>
        </FormStyled>
      </EventStyled>
    </>
  )

  function onHandleSubmit(event) {
    event.preventDefault()
    onNewComment(dailyEvent, { comment: comment, stars: starsSelected })
    selectStar(0)
    setComment('')
  }

  function toggleRating() {
    setIsRatingVisible(!isRatingVisible)
  }
}

const Scroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

const EventStyled = styled.section`
  background: white;
  border-radius: 5px;
  box-shadow: 2px 10px 20px #0004;
  position: relative;
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  > div > p {
    font-size: 14px;
  }
  button {
    background-color: #dedddc;
    border-radius: 6px;
    padding: 5px;
    margin: 10px;
    border: none;
    width: 265px;
  }
`
const FormStyled = styled.form`
  border: 1px solid darkgray;
  display: grid;

  padding: 10px;
  label {
    font-size: 16px;
  }
  textarea {
    font-family: Helvetica;
    width: 95%;
    border: 1px solid darkgray;
  }
`
const AverageRatingStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    font-size: 14px;
    color: grey;
  }
`

const CommentStyled = styled.div`
  background-color: #f8f8f8;
  margin: 10px;
  border-radius: 5px;
  flex: 1 0 100%;
  font-size: 14px;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;
`

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
