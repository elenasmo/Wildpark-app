import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import styled from 'styled-components'
import Page from '../common/Page'
import { Restaurant } from 'styled-icons/material/Restaurant'
import { Child } from 'styled-icons/fa-solid/Child'
import { Restroom } from 'styled-icons/fa-solid/Restroom'
import { Baidu } from 'styled-icons/boxicons-logos/Baidu'

const token = process.env.REACT_APP_MAPBOX_TOKEN

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
}

export default function MapPage({ animalList, initAnimal, pageTitle }) {
  const [activeAnimal, setActiveAnimal] = useState(initAnimal)

  const [isPopupVisible, setIsPopupVisible] = useState(initAnimal != null)

  const [viewport, setViewport] = useState({
    latitude: 53.23756,
    longitude: 10.044543,
    width: '100vw',
    height: '80vh',
    zoom: 16,
    maxZoom: 17,
    minZoom: 15
  })

  return (
    <>
      <Page pageTitle={pageTitle}>
        <FilterStyled>
          <button>
            <BaiduStyled />
          </button>
          <button>
            <RestaurantStyled />
          </button>
          <button>
            <WCStyled />
          </button>
          <button>
            <PlaygroundStyled />
          </button>
        </FilterStyled>
        <p
          style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: 'bolder'
          }}
        ></p>
        <ReactMapGl
          onTouchStart={() => setActiveAnimal(null)}
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/qesmo/ck1uga55z01ws1do6z6dn2akj"
          onViewportChange={viewport => setViewport(viewport)}
        >
          {animalList.map(animal => (
            <Marker
              key={animal.station}
              latitude={parseFloat(animal.latitude)}
              longitude={parseFloat(animal.longitude)}
            >
              {animal.icon == null ? (
                <ButtonStyled onClick={() => showPopup(animal)}>
                  {animal.station}
                </ButtonStyled>
              ) : (
                <IconStyled
                  src={animal.icon}
                  alt={animal.title}
                  onClick={() => showPopup(animal)}
                />
              )}
            </Marker>
          ))}
          <GeolocateControl
            style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {renderPopup()}
        </ReactMapGl>
      </Page>
    </>
  )

  function renderPopup() {
    if (isPopupVisible && activeAnimal) {
      return (
        <Popup
          latitude={parseFloat(activeAnimal.latitude)}
          longitude={parseFloat(activeAnimal.longitude)}
          onClose={() => {
            setActiveAnimal(null)
          }}
        >
          <div>{activeAnimal.title}</div>
        </Popup>
      )
    }
  }
  function showPopup(animal) {
    setActiveAnimal(animal)
    activeAnimal === animal
      ? setIsPopupVisible(!isPopupVisible)
      : setIsPopupVisible(true)
  }
}

const ButtonStyled = styled.button`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  transform: translateX(-50%);
`
const IconStyled = styled.img`
  width: 40px;
  font-size: 1.2em;
  transform: translateX(-50%);
`
const FilterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 15px;
  > button {
    background-color: lightgrey;
    margin: 5px;
    padding: 2px;
  }
`
const RestaurantStyled = styled(Restaurant)`
  height: 30px;
`
const WCStyled = styled(Restroom)`
  height: 25px;
`
const PlaygroundStyled = styled(Child)`
  height: 25px;
`
const BaiduStyled = styled(Baidu)`
  height: 25px;
`
