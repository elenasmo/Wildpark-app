import React, { useState, useEffect } from 'react'
import ReactMapGl, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import styled from 'styled-components'

const token = process.env.REACT_APP_MAPBOX_TOKEN

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
}

export default function MapPage({ animalList, initAnimal }) {
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
      <h2>Parkplan</h2>
      <p
        style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}
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
              <button onClick={() => showPopup(animal)}>
                <IconStyled src={animal.icon} alt={animal.title} />
              </button>
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
