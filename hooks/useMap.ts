import { mutate } from 'swr';
import { NaverMap } from '@/types/map';
import { useCallback } from 'react';
import { Cordinates } from '@/types/info';

export const INITIAL_CENTER: Cordinates = [37.3595704, 127.105399];
export const INITIAL_ZOOM = 10;
export const INITIAL_MIN = 6;
export const MAP_KEY = '/map';
const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);
  return {
    initializeMap,
  };
};

export default useMap;
