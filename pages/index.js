import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import Head from "next/head";

export default function Home({countries}) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumnail.png"/>
        <meta property="og:title" content="NARAS"/>
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요."/>
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
    );
}

// SSG(Staric Site Generation) 방식으로 처리 하도록 정의 (비동기 방식) 
export const getStaticProps = async() => {
  // SSR을 위해 서버측에서 페이지 컴포넌트(HOME Component)에게 전달할 데이터를 설정하는 함수
  // API 호출 코드가 필요함
  const countries = await fetchCountries();
  console.log("가져옴")

  return {
    props: {
      countries,
    },
  };

  { /*
// SSR(Server Side Rendering) 방식으로 처리 하도록 정의 (비동기 방식) 
export const getServerSideProps = async() => {
  // SSR을 위해 서버측에서 페이지 컴포넌트(HOME Component)에게 전달할 데이터를 설정하는 함수
  // API 호출 코드가 필요함
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
*/ }

}