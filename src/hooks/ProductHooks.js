import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"

// Get all products 
export const useGetAllProducts = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ["products"],
        queryFn: async ()=>{
            const response = await axiosPublic.get('/products/published');
            return response?.data?.data;
        }
    });
}