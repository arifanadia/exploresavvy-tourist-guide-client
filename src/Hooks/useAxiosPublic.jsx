import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://exploresavvy-tourist-guide-server.vercel.app'
})
const useAxiosPublic = () => {


    return axiosPublic;
}


export default useAxiosPublic;