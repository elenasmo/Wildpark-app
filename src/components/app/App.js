import React, { useState, useEffect } from 'react'
import AnimalList from '../animal/AnimalList'
import DailyEventsList from '../dailyEvents/DailyEventsList'
import Navigation from './Navigation'
import MapPage from '../map/MapPage'
import { Burger } from './Burger'
import { getAnimals } from '../services'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
  const [open, setOpen] = useState(false)
  const [animalList, setAnimalList] = useState([])

  useEffect(() => {
    getAnimals().then(setAnimalList)
  }, [])
  return (
    <>
      <Router>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Navigation open={open} handleClick={() => setOpen(!open)} />
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <AnimalList
              animalList={animalList}
              onHandleLike={handleLike}
              pageTitle={'Unsere Tiere'}
            />
          )}
        />
        <Route
          path="/events"
          render={() => <DailyEventsList pageTitle={'Vorführungen'} />}
        />
        <Route
          path="/map"
          render={props => {
            return (
              <MapPage
                {...props.location}
                animalList={animalList}
                pageTitle={'Parkplan'}
              />
            )
          }}
        />
      </Router>
    </>
  )
  function handleLike(animal) {
    const index = animalList.indexOf(animal)
    setAnimalList([
      ...animalList.slice(0, index),
      { ...animal, isLiked: !animal.isLiked },
      ...animalList.slice(index + 1)
    ])
  }
}
