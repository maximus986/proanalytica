/** @jsx jsx */
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { jsx } from 'theme-ui';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { config } from 'config';
import { LocationPopup } from './LocationPopup';

export const LocationMap = ({ locations }) => {
  const { t } = useTranslation();
  if (typeof window !== 'undefined') {
    return (
      <MapContainer
        center={[config.mapCenterLatitude, config.mapCenterLongitude]}
        scrollWheelZoom={false}
        // TODO: Add dynamic zoom depending on the screen size
        zoom={12}
        sx={{
          height: '600px',
          width: '100%',
          '.leaflet-top, .leaflet-bottom': { zIndex: 'auto' },
        }}
      >
        <TileLayer
          attribution={config.mapBoxStyleAttribution}
          url={config.mapBoxStyleUrl}
        />
        <Marker position={[config.officeLatitude, config.officeLongitude]}>
          <LocationPopup
            locationType={t('office')}
            locationAddress={locations[0].address} // The model is fucked up.
          />
        </Marker>
        <Marker
          position={[config.warehouseLatitude, config.warehouseLongitude]}
        >
          <LocationPopup
            locationType={t('warehouse')}
            locationAddress={locations[1].address} // The model is fucked up.
          />
        </Marker>
      </MapContainer>
    );
  }
  return null;
};
