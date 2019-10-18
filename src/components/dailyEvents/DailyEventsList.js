import React, { useState, useEffect } from 'react'
import DailyEvent from './DailyEvent'
import Page from '../common/Page'
import styled from 'styled-components'
import { getEvents } from '../services'

export default function DailyEventsList({ pageTitle }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then(setEvents)
  }, [])
  return (
    <Page pageTitle={pageTitle}>
      <DailyEventsPage>
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
    </Page>
  )
}

const DailyEventsPage = styled.section`
  padding: 4px;
  h2 {
    text-align: center;
  }
`
