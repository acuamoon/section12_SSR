import axios from 'axios';

export async function fetchCountries() {
    try {
        /* API를 편하게 Request 해주는 axios (비동기로 반응) */
        /* await를 사용하면 비동기 함수가 처리될 때 까지 기다려 줌 */
        const response = await axios.get(
            'https://naras-api.vercel.app/all'
            );
        return response.data;
    } catch(e) {
        /* 에러 대응 코드 */
        return [];
    }
}

export async function fetchSearchResults(q) {
    try {
        const response = await axios.get(
            `https://naras-api.vercel.app/search?q=${q}`
            );
        return response.data;
    } catch(e) {
        return [];
    }
}

export async function fetchCountry(code) {
    try {
        const response = await axios.get(
            `https://naras-api.vercel.app/code/${code}`
        );
        return response.data;
    }catch(e) {
        return null;
    }
}