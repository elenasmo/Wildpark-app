import React, { useState } from 'react'
import ReactMapGl, { Popup, GeolocateControl } from 'react-map-gl'
import styled from 'styled-components'
import Page from '../common/Page'
import RenderMarkers from './RenderMarkers'
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
const bounds = [[53.235344, 10.039464], [53.240696, 10.052925]]

const hospitalityList = [
  { title: 'Elchlodge', latitude: '53.239279', longitude: '10.048521' },
  { title: 'Restaurant', latitude: '53.236652', longitude: '10.042483' },
  {
    title: 'Kiosk mit Blick auf den Spielplatz',
    latitude: '53.236484',
    longitude: '10.041934'
  }
]

export default function MapPage({ animalList, initAnimal, pageTitle }) {
  const [activeMarker, setActiveMarker] = useState(initAnimal)
  const [isPopupVisible, setIsPopupVisible] = useState(initAnimal != null)
  const [selectedMarkers, setSelectedMarkers] = useState('animals')

  const [viewport, setViewport] = useState({
    latitude: 53.23756,
    longitude: 10.044543,
    width: '100vw',
    height: '80vh',
    zoom: 15,
    maxZoom: 18,
    minZoom: 14
  })

  function withMarkers() {
    let list = []
    if (selectedMarkers === 'animals') {
      list = [...animalList]
    }
    if (selectedMarkers === 'hospitality') {
      list = [...hospitalityList]
    }

    return <RenderMarkers list={list} onClick={handlePopup} />
  }

  return (
    <>
      <Page pageTitle={pageTitle}>
        <FilterStyled>
          <button
            onClick={() => {
              setSelectedMarkers('animals')
              setIsPopupVisible(false)
            }}
          >
            <BaiduStyled />
          </button>
          <button
            onClick={() => {
              setSelectedMarkers('hospitality')
              setIsPopupVisible(false)
            }}
          >
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
        <MapStyled>
          <ReactMapGl
            onTouchStart={() => setActiveMarker(null)}
            {...viewport}
            mapboxApiAccessToken={token}
            mapStyle="mapbox://styles/qesmo/ck1v85i1p041r1cn5zlht4pzq"
            maxBounds={bounds}
            onViewportChange={viewport => setViewport(viewport)}
          >
            <GeolocateControl
              style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
            {withMarkers()}
            {renderPopup()}
          </ReactMapGl>
        </MapStyled>
      </Page>
    </>
  )

  function renderPopup() {
    if (isPopupVisible && activeMarker) {
      return (
        <Popup
          latitude={parseFloat(activeMarker.latitude)}
          longitude={parseFloat(activeMarker.longitude)}
          onClose={() => {
            setActiveMarker(null)
          }}
          onClick={togglePopup}
        >
          <div>{activeMarker.title}</div>
        </Popup>
      )
    }
  }
  function handlePopup(marker) {
    setActiveMarker(marker)
    activeMarker === marker
      ? setIsPopupVisible(!isPopupVisible)
      : setIsPopupVisible(true)
  }

  function togglePopup() {
    setIsPopupVisible(!isPopupVisible)
  }
}

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
const MapStyled = styled.div`
  box-shadow: 0px 0px 10px 10px #0003;
`
