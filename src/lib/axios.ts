import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.API_HOST+'/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;
