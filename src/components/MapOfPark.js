import React, { useState, useEffect } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { Icon, Style } from 'ol/style'
import { fromLonLat, transform } from 'ol/proj'
import VectorLayer from 'ol/layer/Vector'
import { Vector } from 'ol/source'
import styled from 'styled-components'

const animalLocations = [
  { title: 'Wölfe', lat: 53.2369, lng: 10.04223 },
  { title: 'Enten', lat: 53.23594, lng: 10.04088 },
  { title: 'Tiger', lat: 53.23962, lng: 10.04934 }
]

const wildparkDestination = fromLonLat([10.044297222222, 53.236686111111])

export default function MapOfPark() {
  const [map, setMap] = useState(null)

  useEffect(() => {
    const newMap = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        maxZoom: 18,
        center: wildparkDestination,
        zoom: 15
      })
    })

    {
      animalLocations.forEach(animal => {
        addPoint(newMap, animal.lat, animal.lng)
        console.log(animal)
      })
    }
    setMap(newMap)
  }, [])
  return (
    <>
      <MapWrapper id="map" className="map"></MapWrapper>
    </>
  )
}

function addPoint(map, lat, lng) {
  let vectorLayer = new VectorLayer({
    source: new Vector({
      features: [
        new Feature({
          name: 'Test',
          geometry: new Point(
            transform(
              [parseFloat(lng), parseFloat(lat)],
              'EPSG:4326',
              'EPSG:3857'
            )
          )
        })
      ]
    }),
    style: new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg'
      })
    })
  })
  map.addLayer(vectorLayer)
}

const MapWrapper = styled.div`
  position: relative;
`
