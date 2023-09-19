import { useCallback } from 'react';
import { Info } from '@/types/info';
import { mutate } from 'swr';

export const INFO_KEY = '/infos';

const useInfo = () => {
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return {
    initializeInfos,
  };
};
export default useInfo;
