import React from 'react';

export default function SeasonDisplay({ lat }) {
  const getSeason = function (lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    }
    else {
      return lat > 0 ? 'winter' : 'summer';
    }
  };

  const season = getSeason(lat, new Date().getMonth());
  console.log(season);

  return <>Latitude: {lat}</>;
}
