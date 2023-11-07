import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";

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

/* Layout 설정 */
Search.Layout = SubLayout;

/* SSR 방식으로 처리 하도록 정의 (비동기 방식) */
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