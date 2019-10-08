import React from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import BingMaps from 'ol/source/BingMaps'

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
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13
      })
    })
  }, [])
  return <div id="map" className="map"></div>
}
