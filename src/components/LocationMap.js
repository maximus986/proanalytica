/** @jsx jsx */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { jsx } from 'theme-ui';
import { config } from '../config';

export const LocationMap = () => {
  if (typeof window !== 'undefined') {
    return (
      <MapContainer
        center={[44.817835, 20.4113066]}
        scrollWheelZoom={false}
        zoom={15}
        sx={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution={config.mapBoxStyleAttribution}
          url={config.mapBoxStyleUrl}
        />
        <Marker position={[44.817835, 20.4113066]}>
          <Popup>Bulevar umetnosti 27, 11000 Beograd</Popup>
        </Marker>
      </MapContainer>
    );
  }
  return null;
};
