import React from 'react';
import Map from './Map';
import { NaverMap } from '@/types/map';
import useMap from '@/hooks/useMap';
import Markers from './Markers';

// Marker를 그려야 한다.
// Marker는 naver.map 객체에 그려야 한다.(전역 참조가 가능해야 한다.)

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
