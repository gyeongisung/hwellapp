import React from 'react';
import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap from '@/hooks/useMap';
import Markers from './Markers';

const MapScene = () => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
