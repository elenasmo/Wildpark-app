import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import { animals } from '../data/animals'

const animalsEven = animals.filter((animal, index) => index % 2 === 0)
console.log(animalsEven)
const animalsOdd = animals.filter((animal, index) => index % 2 !== 0)
console.log(animalsOdd)

export default function AnimalList() {
  const [gridView, setGridView] = useState(true)
  function renderArrangement(gridView) {
    if (gridView) {
      return (
        <GridLayoutStyled>
          <ColumnStyled>
            {animalsEven.map((animal, index) => (
              <Animal
                key={index}
                title={animal.title}
                picture={animal.picture}
              />
            ))}
          </ColumnStyled>
          <ColumnStyled>
            {animalsOdd.map((animal, index) => (
              <Animal
                key={index}
                title={animal.title}
                picture={animal.picture}
              />
            ))}
          </ColumnStyled>
        </GridLayoutStyled>
      )
    } else {
      return (
        <div>
          {animals.map((animal, index) => (
            <Animal
              key={index}
              title={animal.title}
              picture={animal.picture}
              information={animal.information}
            />
          ))}
        </div>
      )
    }
  }

  function showGrid() {
    setGridView(true)
  }

  function showFullWidth() {
    setGridView(false)
  }
  return (
    <>
      <button onClick={showGrid}>Grid</button>
      <button onClick={showFullWidth}>Details</button>
      {renderArrangement(gridView)}
    </>
  )
}

const GridLayoutStyled = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: 1fr 1fr;
  padding: 6px;
`

const ColumnStyled = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 10px;
  /* padding: 0 4px; */
`
