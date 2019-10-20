import React from 'react'
import { Marker } from 'react-map-gl'
import styled from 'styled-components'

export default function RenderMarkers({ list, onClick }) {
  return (
    <>
      {list.map(marker => (
        <Marker
          key={marker.title}
          latitude={parseFloat(marker.latitude)}
          longitude={parseFloat(marker.longitude)}
        >
          <IconStyled
            src={marker.icon}
            alt={marker.title}
            onClick={() => onClick(marker)}
          />
        </Marker>
      ))}
    </>
  )
}

const IconStyled = styled.img`
  width: 30px;
  font-size: 1.2em;
  transform: translateX(-50%);
`
