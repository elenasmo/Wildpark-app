import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'

import tiger from './img/tiger.png'
import wollschweine from './img/wollschweine.png'
import bear from './img/bear.png'
import gänsegeier from './img/gänsegeier.png'
import luchs from './img/luchs.png'
import polarwolf from './img/polarwolf.png'
import schneeleopard from './img/schneeleopard.png'
import { H1 } from '@storybook/addon-info/dist/components/markdown'

const animals = [
  { title: 'Sibirischer Tiger', picture: tiger },
  { title: 'Wollschweine', picture: wollschweine },
  { title: 'Gänsegeier', picture: gänsegeier },
  { title: 'Luchs', picture: luchs },
  { title: 'Schneeleopard', picture: schneeleopard },
  { title: 'Polarwolf', picture: polarwolf },
  { title: 'Kamtschatkabär', picture: bear },
  { title: 'Sibirischer Tiger', picture: tiger },
  { title: 'Gänsegeier', picture: gänsegeier },
  { title: 'Luchs', picture: luchs },
  { title: 'Schneeleopard', picture: schneeleopard },
  { title: 'Polarwolf', picture: polarwolf },
  { title: 'Kamtschatkabär', picture: bear },
  { title: 'Sibirischer Tiger', picture: tiger }
]

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
            <Animal key={index} title={animal.title} picture={animal.picture} />
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
