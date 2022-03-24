import axios from 'axios';

const URL_BASE = "http://localhost:5000";

const axiosInterceptor = axios.create({baseURL : URL_BASE});

axiosInterceptor.interceptors.request.use((request) => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    request.headers.Authorization = 'Bearer ' + token;
    return request;
}, (error) => error);

axiosInterceptor.interceptors.response.use((response) => {
    return response;   
}, (error) => {
    return Promise.reject(error.response.data);
});


export default axiosInterceptor;