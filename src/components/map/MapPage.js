import React, { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components'

const token = process.env.REACT_APP_MAPBOX_TOKEN

export default function MapPage({ animalList }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [activeStation, setActiveStation] = useState(null)

  const [viewport, setViewport] = useState({
    latitude: 53.23756,
    longitude: 10.044543,
    width: '100vw',
    height: '80vh',
    zoom: 16
  })

  return (
    <>
      <h2>Parkplan</h2>

      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        onViewportChange={viewport => setViewport(viewport)}
      >
        {animalList.map(station => (
          <Marker
            key={station.station}
            latitude={parseFloat(station.latitude)}
            longitude={parseFloat(station.longitude)}
          >
            <ButtonStyled onClick={() => showPopup(station)}>
              {station.station}
            </ButtonStyled>
          </Marker>
        ))}
        {renderPopup()}
      </ReactMapGl>
    </>
  )

  function renderPopup() {
    if (isPopupVisible && activeStation) {
      return (
        <Popup
          latitude={parseFloat(activeStation.latitude)}
          longitude={parseFloat(activeStation.longitude)}
        >
          <div>{activeStation.title}</div>
        </Popup>
      )
    }
  }
  function showPopup(station) {
    setActiveStation(station)
    activeStation === station
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
