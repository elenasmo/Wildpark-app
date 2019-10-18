import React from 'react'
import { Restaurant } from 'styled-icons/material/Restaurant'
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
          {marker.icon == null ? (
            <RestaurantIcon onClick={() => onClick(marker)} />
          ) : (
            <IconStyled
              src={marker.icon}
              alt={marker.title}
              onClick={() => onClick(marker)}
            />
          )}
        </Marker>
      ))}
    </>
  )
}

const RestaurantIcon = styled(Restaurant)`
  height: 20px;
`
const IconStyled = styled.img`
  width: 40px;
  font-size: 1.2em;
  transform: translateX(-50%);
`
