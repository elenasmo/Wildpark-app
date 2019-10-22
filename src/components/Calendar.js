import React, { useState } from 'react'
import Calendar from 'react-calendar'

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date())

  return <Calendar onChange={setDate} value={date} />
}
