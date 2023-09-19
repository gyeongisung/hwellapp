import { Marker } from '@/types/map';
import React, { useEffect } from 'react';

const Marker = ({ map, cordinates }: Marker) => {
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(...cordinates),
        map: map,
      });
      return () => {
        marker?.setMap(null);
      };
    }
  }, [map]);
  return <div>Marker</div>;
};

export default Marker;
