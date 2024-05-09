import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.VUE_APP_ECWID_API_URL,
});

export default axiosInstance;
