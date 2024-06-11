import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTourGuide = () => {

    const axiosSecure = useAxiosSecure()
    const { data: tourGuides = [] } = useQuery({
        queryKey: ['packages'],
        queryFn : async() => {
            const res = await axiosSecure.get('/tourGuides')
            return res.data
        }
    })
    return [tourGuides]
};

export default useTourGuide;