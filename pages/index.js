import { fetchCountries } from "@/api";

export default function Home({countries}) {
  return <div>
    {countries.map((country) => <div key={country.code}>{country.commonName}</div>)}
    </div>;
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