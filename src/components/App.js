import React, { useState } from 'react'
import AnimalList from './AnimalList'
import DailyEventsList from './DailyEventsList'
import Navigation from './Navigation'
import { Burger } from './Burger'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Router>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Navigation open={open} handleClick={() => setOpen(!open)} />
        </div>
        <Route exact path="/" render={() => <AnimalList />} />
        <Route path="/events" render={() => <DailyEventsList />} />
      </Router>
    </>
  )
}
