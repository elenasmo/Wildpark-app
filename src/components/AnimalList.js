import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import { animals } from '../data/animals'

const animalsEven = animals.filter((animal, index) => index % 2 === 0)
console.log(animalsEven)
const animalsOdd = animals.filter((animal, index) => index % 2 !== 0)
console.log(animalsOdd)

export default function AnimalList() {
  const [index, setIndex] = useState(0)
  function renderArrangement(index) {
    if (index === 0) {
      return (
        <RowStyled>
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
        </RowStyled>
      )
    } else if (index === 1) {
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

  function handleGrid() {
    setIndex(0)
  }

  function handleFullWidth() {
    setIndex(1)
  }
  return (
    <>
      <button onClick={handleGrid}>Grid</button>
      <button onClick={handleFullWidth}>Details</button>
      {renderArrangement(index)}
    </>
  )
}

const RowStyled = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  padding: 0 4px;
`

const ColumnStyled = styled.div`
  padding: 0 4px;
`
