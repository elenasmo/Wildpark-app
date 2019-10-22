import React from 'react'
import CalendarComponent from './Calendar'
import Page from './common/Page'

export default function CalendarPage({ pageTitle, setOpen }) {
  return (
    <Page pageTitle={pageTitle} setOpen={setOpen}>
      <CalendarComponent />
    </Page>
  )
}
