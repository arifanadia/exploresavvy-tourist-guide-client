import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTouristStories = () => {
    const axiosSecure = useAxiosSecure()
    const { data: touristStories = [] } = useQuery({
        queryKey: ['packages'],
        queryFn : async() => {
            const res = await axiosSecure.get('/tourist-stories')
            return res.data
        }
    })
    return [touristStories]
};

export default useTouristStories;