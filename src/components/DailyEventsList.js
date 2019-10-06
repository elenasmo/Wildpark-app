import React from 'react'
import DailyEvent from './DailyEvent'
import styled from 'styled-components'
import { dailyEvents } from '../data/dailyEvents'

export default function DailyEventsList() {
  return (
    <DailyEventsPage>
      <h2>Tägliche Vorführungen</h2>
      {dailyEvents.map(item => (
        <DailyEvent
          key={item.title}
          title={item.title}
          picture={item.picture}
          information={item.information}
          month={item.month}
          times={item.times}
          timesWeekend={item.timesWeekend}
        />
      ))}
    </DailyEventsPage>
  )
}

const DailyEventsPage = styled.section`
  padding: 10px;
  background-color: #ededf2;
  h2 {
    text-align: center;
  }
`
