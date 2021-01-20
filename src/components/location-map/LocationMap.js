/** @jsx jsx */
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { jsx } from 'theme-ui';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
// import L from 'leaflet';
import { config } from '../../config';
import { LocationPopup } from './LocationPopup';

// Custom icon implementation if customer wants

// const icon = new L.Icon({
//   iconUrl: require('../images/logo.png'),
//   iconRetinaUrl: require('../images/logo.png'),
//   iconAnchor: null,
//   popupAnchor: null,
//   shadowUrl: null,
//   shadowSize: null,
//   shadowAnchor: null,
//   iconSize: new L.Point(60, 75),
//   className: 'leaflet-div-icon',
// });

export const LocationMap = ({ companyAddress }) => {
  const { t } = useTranslation();
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
          <LocationPopup
            locationType={t('locationType')}
            locationAddress={companyAddress}
          />
        </Marker>
      </MapContainer>
    );
  }
  return null;
};
