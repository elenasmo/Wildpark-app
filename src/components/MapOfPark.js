import React from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'

import { Icon, Style } from 'ol/style'
import { fromLonLat } from 'ol/proj'
import VectorLayer from 'ol/layer/Vector'
import { Vector } from 'ol/source'

//import BingMaps from 'ol/source/BingMaps'

const wildparkDestinationLonLat = [10.044297222222, 53.236686111111]
const wildparkDestination = fromLonLat(wildparkDestinationLonLat)

// const Layer = new Vector({
//   source: new Vector({
//     features: [
//       new Feature({
//         geometry: new Point(fromLonLat([4.35247, 50.84673]))
//       })
//     ]
//   })
// })

export default function MapOfPark() {
  React.useEffect(() => {
    new Map({
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
  }, [])
  return (
    <>
      <div id="map" className="map"></div>
    </>
  )
}

// source: new BingMaps({
//   key:
//     'AnqTxA9moAAQ0Qo0ZiuzU1RUNTf30zW4lE2pQ-Md3eZSAJ0bqnLGOR1YOWINkyQx',
//   imagerySet: 'AerialWithLabels'
// })
