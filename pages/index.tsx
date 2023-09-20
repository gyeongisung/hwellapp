import Header from '@/components/common/Header';
import MapScene from '@/components/common/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

interface IProps {
  infos: Info[];
}

export default function Home({ infos }: IProps) {
  const { initializeInfos } = useInfo();

  useEffect(() => {
    initializeInfos(infos);
  }, [initializeInfos, infos]);

  return (
    <>
      <NextSeo
        title="건강검진센터 위치"
        description="건강검진센터 위치 서비스 입니다."
        canonical="https://hwellapp-gyeongisung.vercel.app/"
      />
      <Header />
      <MapScene />
    </>
  );
}

export async function getStaticProps() {
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    revalidate: 3600,
  };
}
