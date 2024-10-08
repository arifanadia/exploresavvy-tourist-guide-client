import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://exploresavvy-tourist-guide-server.vercel.app'
})

const useAxiosSecure = () => {
    // const { logOut } = useAuth();
    // const navigate = useNavigate();

    // axiosSecure.interceptors.request.use((config) => {
    //     const token = localStorage.getItem('access-token');
    //     if (token) {
    //         config.headers.authorization = `Bearer ${token}`;
    //     }
    //     console.log('request intercepted', config);
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });
    
    // axiosSecure.interceptors.response.use((response) => {
    //     return response;
    // }, async (error) => {
    //     const status = error.response ? error.response.status : null;
    //     if (status === 401 || status === 403) {
    //         await logOut();
    //         navigate('/login');
    //     }
    //     return Promise.reject(error);
    // });
    return axiosSecure;
};

export default useAxiosSecure;
