/** @jsx jsx */
import styled from '@emotion/styled';
import { Popup } from 'react-leaflet';
import { jsx, useThemeUI } from 'theme-ui';
import Logo from '../../images/logo.png';

export const LocationPopup = ({ locationType, locationAddress }) => {
  const { theme } = useThemeUI();
  return (
    <StyledPopup
      closeButton={false}
      zoomAnimation
      minWidth={250}
      {...{ theme }}
    >
      <figure sx={{ width: '160px', margin: '0 auto', mb: 3 }}>
        <img src={Logo} alt="Logo" sx={{ width: '100%' }} />
      </figure>
      <p sx={{ fontSize: 1 }}>{`${locationType}:`}</p>
      <p sx={{ fontSize: 1 }}>{locationAddress}</p>
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)`
  /* NOTE: important is used because bottom property is set inline */
  bottom: 5px !important;
  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: ${(props) => props.theme.colors.primaryPassive};
    color: ${(props) => props.theme.colors.textPrimary};
  }
  .leaflet-popup-content {
    margin: 0;
    padding: ${(props) => props.theme.space[4]}px;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.body};
  }
  .leaflet-popup-content-wrapper {
    border-radius: ${(props) => props.theme.radii.locationPopup}px;
  }
  .leaflet-popup-content p {
    margin: 0;
  }
`;
