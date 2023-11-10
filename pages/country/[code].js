import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
    const router = useRouter();
    const { code } = router.query;

    // 서버에 자료 생성 중
    if(router.isFallback) {
        return <div>Loading...</div>
    }

    // 존재하지 않는 국가인 경우
    if(!country) {
        return <div>존재하지 않는 국가 입니다.</div>
    }

    return (
        <div>
            {country.commonName} {country.officialName}
        </div>
    );   
}

Country.Layout = SubLayout;

// SSD 처리
export const getStaticPaths = async()=> {
    return {
        paths: [
            { params: { code: "ABW"} },
            { params: { code: "KOR"} },
        ],
        fallback: true,
    };
}


export const getStaticProps = async(context) => {
    const { code } = context.params;
    console.log(`${code} 페이지 생성`)

    let country = null;
    if(code) {
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        },
        // ISR (증분 정적 생성) 3초 주기로 재생성
        revalidate : 3
    };
}


/*
// SSR 처리
export const getServerSideProps = async(context) => {
    const { code } = context.params;

    let country = null;
    if(code) {
        country = await fetchCountry(code);
    }

    return {
        props: {
            country
        },
    };
}
*/