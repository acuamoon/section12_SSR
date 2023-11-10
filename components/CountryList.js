import CountryItem from './CountryItem';
import style from './CountryList.module.css';

export default function CountryList({countries}) {

    return (
    <div className={style.container}>
        {countries.map((country)=>(
            <CountryItem key={country.code} {...country}/>
        ))}
    </div>);
}

/* 배열에 빈값이 들어오는 경우에 Default Props를 정의 */
CountryList.defaultProps = {
    countries: [],
}