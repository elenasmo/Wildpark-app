import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import { animals } from '../data/animals'
import { GridVertical } from 'styled-icons/boxicons-regular/GridVertical'
import { ViewList } from 'styled-icons/material/ViewList'
import { Menu } from 'styled-icons/material/Menu'
import { Dropbox } from 'styled-icons/boxicons-logos/Dropbox'

const animalsSorted = animals.sort((a, b) => a.station - b.station)

const animalsEven = animalsSorted.filter((animal, index) => index % 2 === 0)

const animalsOdd = animalsSorted.filter((animal, index) => index % 2 !== 0)

export default function AnimalList() {
  const [gridView, setGridView] = useState(true)
  const [sort, setSort] = useState(animalsSorted)
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
          {animalsSorted.map((animal, index) => (
            <Animal
              key={index}
              title={animal.title}
              picture={animal.picture}
              station={animal.station}
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
      <GridStyle>
        <div>
          <ButtonStyled onClick={showGrid}>
            <GridVerticalStyled />
          </ButtonStyled>
          <ButtonStyled onClick={showFullWidth}>
            <ViewListStyled />
          </ButtonStyled>
        </div>
        <MenuStyled />
      </GridStyle>
      <button>Sortieren nach Stationen</button>
      <button>Sortieren nach Namen</button>
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
`
const GridStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ButtonStyled = styled.button`
  border: none;
  background-color: white;
`

const GridVerticalStyled = styled(GridVertical)`
  height: 35px;
  color: grey;
`
const ViewListStyled = styled(ViewList)`
  height: 40px;
  color: grey;
`
const MenuStyled = styled(Menu)`
  height: 45px;
  color: grey;
`

const DropboxStyled = styled(Dropbox)``
