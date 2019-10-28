import React, { useState, useEffect } from 'react'
import DailyEvent from './DailyEvent'
import Page from '../common/Page'
import styled from 'styled-components'

import { getEvents, patchEvent } from '../services'

export default function DailyEventsList({ pageTitle, setOpen }) {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then(setEvents)
  }, [])
  return (
    <Page pageTitle={pageTitle} setOpen={setOpen}>
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
            dailyEvent={item}
            onNewComment={onNewComment}
          />
        ))}
      </DailyEventsPage>
    </Page>
  )

  function onNewComment(dailyEvent, newComment) {
    patchEvent(dailyEvent._id, {
      rating: [...dailyEvent.rating, newComment]
    }).then(updatedEvent => {
      const index = events.findIndex(
        dailyEvent => dailyEvent._id === updatedEvent._id
      )
      setEvents([
        ...events.slice(0, index),
        { ...updatedEvent },
        ...events.slice(index + 1)
      ])
    })
  }
}

const DailyEventsPage = styled.section`
  padding: 4px;
  h2 {
    text-align: center;
  }
`
