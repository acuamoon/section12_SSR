import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/Searchbar";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;
    const [countries, setCountries] = useState([]);

    const setData = async()=>{
        const data = await fetchSearchResults(q);
        setCountries(data);
    }

    useEffect(()=> {
        if(q) {
            setData();
        }
    },[q]);

    return (
    <>
      <Head>
        <title>NARAS 검색</title>
        <meta property="og:image" content="/thumnail.png"/>
        <meta property="og:title" content="NARAS 검색 결과"/>
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요."/>
      </Head>
      <Searchbar q={q}/>
      <CountryList countries={countries}/>
    </>
    );
}

/* Layout 설정 */
Search.Layout = SubLayout;

/*
export default function Search({countries}) {
    return (
    <div>
        {countries.map((country) => (
            <div key={country.code}>
                {country.commonName}
            </div>))
        }
    </div>
    );
}

// Layout 설정 
Search.Layout = SubLayout;

// SSR 방식으로 처리 하도록 정의 (비동기 방식) 
export const getServerSideProps = async(context)=>{
    // 1. 검색 결과 API 호출
    // 2. Props 리턴
    const {q} = context.query;
    let countries = [];
    if(q){
        countries = await fetchSearchResults(q)
    }

    return {
        props: {
            countries
        },
    };
}
*/