import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Animal from './Animal'
import Page from '../common/Page'
import { GridVertical } from 'styled-icons/boxicons-regular/GridVertical'
import { ViewList } from 'styled-icons/material/ViewList'
import { getAnimalsFilterAndSorted } from '../../utils/animal_utils'

export default function AnimalList({ onHandleLike, animalList, pageTitle }) {
  const [gridView, setGridView] = useState(false)
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('none')

  return (
    <Page pageTitle={pageTitle}>
      <AnimalPage>
        <GridStyle>
          <div>
            <ToggleButtonLeft>
              <ViewListStyled onClick={showFullWidth} />
            </ToggleButtonLeft>
            <ToggleButtonRight>
              <GridVerticalStyled onClick={showGrid} />
            </ToggleButtonRight>
          </div>
          <div>
            <LabelStyled>Filtern:</LabelStyled>
            <SelectStyled
              name="filter"
              onChange={handleFilterChange}
              placeholder="select"
            >
              <option value="all">alle Tiere</option>
              <option value="liked">Lieblingstiere</option>
            </SelectStyled>
          </div>
          <div>
            <LabelStyled>Sortieren:</LabelStyled>
            <SelectStyled
              name="sort"
              onChange={handleSortChange}
              placeholder="select"
            >
              <option value="title">alphabetisch</option>
              <option value="station">nach Station</option>
              <option value="none">---</option>
            </SelectStyled>
          </div>
        </GridStyle>

        {renderArrangement()}
      </AnimalPage>
    </Page>
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
                onLikeClick={_ => onHandleLike(animal)}
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
                onLikeClick={_ => onHandleLike(animal)}
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
                  onLikeClick={_ => onHandleLike(animal)}
                  isLiked={animal.isLiked}
                  latitude={animal.latitude}
                  longitude={animal.longitude}
                  icon={animal.icon}
                />
              )
            )}
          </FullViewStyled>
        </>
      )
    }
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
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr;
`

const ColumnStyled = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 10px;
`
const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const FullViewStyled = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
`

const GridVerticalStyled = styled(GridVertical)`
  height: 25px;
  color: grey;
  margin: 3px;
`
const ViewListStyled = styled(ViewList)`
  height: 31px;
  color: grey;
`

const LabelStyled = styled.label`
  font-size: 16px;
`
const SelectStyled = styled.select`
  > option {
    font-size: 16px;
  }
`
const ToggleButtonLeft = styled.button`
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
`
const ToggleButtonRight = styled.button`
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
`
