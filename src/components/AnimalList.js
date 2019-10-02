import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import { animals } from '../data/animals'
import { GridVertical } from 'styled-icons/boxicons-regular/GridVertical'
import { ViewList } from 'styled-icons/material/ViewList'
import { Menu } from 'styled-icons/material/Menu'

export default function AnimalList() {
  const [gridView, setGridView] = useState(true)
  const [animalList, setAnimalList] = useState(animals)

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
      <button onClick={showSortedByStation}>Sortieren nach Stationen</button>
      <button onClick={showSortedByTitle}>Sortieren nach Namen</button>
      {renderArrangement()}
    </>
  )

  function renderArrangement() {
    if (gridView) {
      const animalsEven = animalList.filter((animal, index) => index % 2 === 0)
      const animalsOdd = animalList.filter((animal, index) => index % 2 !== 0)

      return (
        <GridLayoutStyled>
          <ColumnStyled>
            {animalsEven.map(animal => (
              <Animal
                key={animal.title}
                title={animal.title}
                picture={animal.picture}
                onLikeClick={() => handleLike(animal)}
                isLiked={animal.isLiked}
              />
            ))}
          </ColumnStyled>
          <ColumnStyled>
            {animalsOdd.map(animal => (
              <Animal
                key={animal.title}
                title={animal.title}
                picture={animal.picture}
                onLikeClick={() => handleLike(animal)}
                isLiked={animal.isLiked}
              />
            ))}
          </ColumnStyled>
        </GridLayoutStyled>
      )
    } else {
      return (
        <FullViewStyled>
          {animalList.map(animal => (
            <Animal
              key={animal.title}
              title={animal.title}
              picture={animal.picture}
              station={animal.station}
              information={animal.information}
              onLikeClick={() => handleLike(animal)}
              isLiked={animal.isLiked}
            />
          ))}
        </FullViewStyled>
      )
    }
  }
  function handleLike(animal) {
    const index = animalList.indexOf(animal)
    setAnimalList([
      ...animalList.slice(0, index),
      { ...animal, isLiked: !animal.isLiked },
      ...animalList.slice(index + 1)
    ])
    console.log(animalList)
  }
  function showGrid() {
    setGridView(true)
  }

  function showFullWidth() {
    setGridView(false)
  }

  function showSortedByStation() {
    setAnimalList(
      animalList.sort((a, b) => a.station - b.station).map(animal => animal)
    )
    console.log(animalList)
  }
  function showSortedByTitle() {
    setAnimalList(
      animalList
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map(animal => animal)
    )
  }
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
const FullViewStyled = styled.div`
  display: grid;
  grid-gap: 20px;
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
