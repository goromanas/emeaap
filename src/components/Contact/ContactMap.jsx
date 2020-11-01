import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Marker, Popup, TileLayer, MapContainer } from 'react-leaflet'
import { Icon } from 'leaflet'
import MarkerImage from '../../../static/images/marker.png'
import styled from 'styled-components'

const Wrapper = styled.div``

const StyledMapContainer = styled(MapContainer)`
  height: 400px;
  max-height: 400px;
`

const ContactMap = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpLocations {
        edges {
          node {
            title
            acf {
              latitude
              longitude
            }
          }
        }
      }
    }
  `)
  const locations = data.allWordpressWpLocations.edges.map(edge => {
    return {
      coordinates: [edge.node.acf.latitude, edge.node.acf.longitude],
      title: edge.node.title,
    }
  })

  const center = [42.849659, 59.868375]
  if (typeof window !== 'undefined') {
    const Pin = new Icon({
      iconUrl: MarkerImage,
      iconSize: [25, 25],
    })
    return (
      <Wrapper>
        <StyledMapContainer center={center} zoom={3} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(location => (
            <Marker
              position={location.coordinates}
              icon={Pin}
              key={location.coordinates}
            >
              <Popup>{location.title}</Popup>
            </Marker>
          ))}
        </StyledMapContainer>
      </Wrapper>
    )
  }
}
export default ContactMap
