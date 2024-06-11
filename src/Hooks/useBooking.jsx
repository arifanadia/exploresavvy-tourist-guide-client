import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useBooking = () => {

    const axiosSecure = useAxiosSecure()
    const { data: bookings = [],refetch } = useQuery({
        queryKey: ['packages'],
        queryFn : async() => {
            const res = await axiosSecure.get('/bookings')
            return res.data
        }
    })
    return [bookings,refetch]
};

export default useBooking;