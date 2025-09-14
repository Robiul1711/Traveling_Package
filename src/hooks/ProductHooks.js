import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic"

// Get all products 
export const useGetAllInternationalProducts = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ["international-products"],
        queryFn: async ()=>{
            const response = await axiosPublic.get('/products/2');
            return response?.data?.data;
        }
    });
}


export const useGetAllLocalProducts = () => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ["local-products"],
        queryFn: async ()=>{
            const response = await axiosPublic.get('/products/1');
            return response?.data?.data;
        }
    });
}

export const useGetSingleProduct = (id) => {
    const axiosPublic = useAxiosPublic();

    return useQuery({
        queryKey: ["single-product", id],
        queryFn: async ()=>{
            const response = await axiosPublic.get(`/products/details/${id}`);
            return response?.data?.data;
        }
    });
}