import React from "react"
import styled from "styled-components/macro"

export default function DailyEvent({
  title,
  picture,
  information,
  times,
  timesWeekend,
  month
}) {
  return (
    <>
      <EventStyled>
        <h3>{title}</h3>
        <img src={picture} alt={title} width="50%" />
        <p>{information}</p>
        <div>
          <p>{month}</p>
          <p>{times}</p>
          <p>{timesWeekend}</p>
        </div>
      </EventStyled>
    </>
  )
}

const EventStyled = styled.section`
  background: white;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0004;
  position: relative;
  margin: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  > div > p {
    font-size: 14px;
  }
`
