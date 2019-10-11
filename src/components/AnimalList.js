import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import { GridVertical } from 'styled-icons/boxicons-regular/GridVertical'
import { ViewList } from 'styled-icons/material/ViewList'
import { getAnimals } from './services'
import { getAnimalsFilterAndSorted } from '../utils/animal_utils'

export default function AnimalList() {
  const [gridView, setGridView] = useState(true)
  const [animalList, setAnimalList] = useState([])
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('none')
  useEffect(() => {
    getAnimals().then(setAnimalList)
  }, [])

  return (
    <AnimalPage>
      <h2>Unsere Tiere</h2>
      <GridStyle>
        <div>
          <GridVerticalStyled onClick={showGrid} />
          <ViewListStyled onClick={showFullWidth} />
        </div>
        <LabelStyled>Filtern:</LabelStyled>
        <SelectStyled
          name="filter"
          onChange={handleFilterChange}
          placeholder="select"
        >
          <option value="all">---</option>
          <option value="liked">liked</option>
        </SelectStyled>
        <LabelStyled>Sortieren:</LabelStyled>
        <SelectStyled
          name="sort"
          onChange={handleSortChange}
          placeholder="select"
        >
          <option value="title">Alphabet</option>
          <option value="station">Station</option>
          <option value="none">---</option>
        </SelectStyled>
      </GridStyle>

      {renderArrangement()}
    </AnimalPage>
  )

  function renderArrangement() {
    if (gridView) {
      const animalsEven = getAnimalsFilterAndSorted(
        animalList,
        sortBy,
        filter
      ).filter((animal, index) => index % 2 === 0)
      const animalsOdd = getAnimalsFilterAndSorted(
        animalList,
        sortBy,
        filter
      ).filter((animal, index) => index % 2 !== 0)

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
        <>
          <FullViewStyled>
            {getAnimalsFilterAndSorted(animalList, sortBy, filter).map(
              animal => (
                <Animal
                  key={animal.title}
                  title={animal.title}
                  picture={animal.picture}
                  station={animal.station}
                  information={animal.information}
                  onLikeClick={() => handleLike(animal)}
                  isLiked={animal.isLiked}
                />
              )
            )}
          </FullViewStyled>
        </>
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
  }
  function showGrid() {
    setGridView(true)
  }

  function showFullWidth() {
    setGridView(false)
  }

  function handleSortChange(event) {
    setSortBy(event.target.value)
  }

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }
}

const AnimalPage = styled.section`
  padding: 10px;
  h2 {
    text-align: center;
  }
`

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

const LabelStyled = styled.label`
  font-size: 18px;
`
const SelectStyled = styled.select`
  > option {
    font-size: 26px;
  }
`
