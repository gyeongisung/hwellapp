import Header from '@/components/common/Header';
import MapScene from '@/components/common/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';

interface IProps {
  infos: Info[];
}

export default function Home({ infos }: IProps) {
  // 위경도에 대한 정보(.json) 및 naver의 map 객체를 전역으로 참조해서
  // swr 상태관리
  const { initializeInfos } = useInfo();

  // 최초 mount가 되면 즉, html이 출력이 되면 props를 출력
  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
    // 새로운 정보가 들어온다면 다시 렌더링 해주기 위해서
  }, [initializeInfos, infos]);
  return (
    <>
      <Header />
      <MapScene />
    </>
  );
}

// pre-rendering 해서 SSG 생성
export async function getStaticProps() {
  // public에 있는 info.json 가져오기
  // props 전달
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    // 일정한 시간이 지나면 데이터를 다시 가져와서 pre-rendering 한다.
    revalidate: 3600,
  };
}
