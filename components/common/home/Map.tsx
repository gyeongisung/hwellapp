import Script from 'next/script';
import React, { useRef } from 'react';
import { NaverMap } from '@/types/map';
import { Cordinates } from '@/types/info';
import { INITIAL_CENTER, INITIAL_MIN, INITIAL_ZOOM } from '@/hooks/useMap';

type Props = {
  mapId?: string;
  initialCenter?: Cordinates;
  initialZoom?: number;
  minZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
const Map = ({
  mapId = "map",
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  minZoom = INITIAL_MIN,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);
  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: minZoom,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;
    if (onLoad) {
      onLoad(map);
    }
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onLoad={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default Map;

