import React from 'react'
import DailyEvent from './DailyEvent'
import { dailyEvents } from '../data/dailyEvents'

export default function DailyEventsList() {
  return (
    <>
      <section>
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
      </section>
    </>
  )
}
