import React, { useState, useEffect } from 'react'
import DailyEvent from './DailyEvent'
import styled from 'styled-components'
import { getEvents } from '../services'

export default function DailyEventsList() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then(setEvents)
  }, [])
  return (
    <DailyEventsPage>
      <h2>Tägliche Vorführungen</h2>
      {events.map(item => (
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
  padding: 4px;
  h2 {
    text-align: center;
  }
`
