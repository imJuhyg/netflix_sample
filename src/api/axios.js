import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ab5746220110e42f4244c4297285c189",
        language: "ko-KR"
    }
});
export default instance;