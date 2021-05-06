export const config = {
  mapBoxStyleUrl: `https://api.mapbox.com/styles/v1/maximus986/ckk35s8ag448n17tljmz9cb7l/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_APP_MAPBOX_KEY}`,
  mapBoxStyleAttribution:
    'Map data &copy; <a href="https://www.openstreetmap.org"  target="_blank" rel="noreferrer">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/"  target="_blank" rel="noreferrer">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com"  target="_blank" rel="noreferrer">Mapbox</a>',
  officeLatitude: 44.8181194,
  officeLongitude: 20.4141981,
  warehouseLatitude: 44.83608706,
  warehouseLongitude: 20.35828049,
  mapCenterLatitude: 44.84710323,
  mapCenterLongitude: 20.386239295,
};
