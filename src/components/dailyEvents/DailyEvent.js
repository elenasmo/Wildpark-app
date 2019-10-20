import React, { useState } from 'react'
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
          {dailyEvent.rating.map((rating, index) => {
            return (
              <React.Fragment key={index}>
                <p>{rating.comment}</p>
                <StarRating activeStars={rating.stars || 0} />
              </React.Fragment>
            )
          })}
        </div>
        <FormStyled onSubmit={onHandleSubmit}>
          <label>
            Hat Ihnen die Vorstellung gefallen?
            <StarRating totalStars={5} />
            <textarea
              name="comment"
              type="text"
              placeholder="Schreiben Sie hier einen Kommentar!"
            />
          </label>
          <button>Hinzufügen</button>
        </FormStyled>
      </EventStyled>
    </>
  )

  function onHandleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    //ändern
    data.stars = starsSelected
    console.log(data)
    onNewComment(dailyEvent, data)
    form.reset()
  }
}

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
`
const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const RatingStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
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
