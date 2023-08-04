import { ProductsFetchResponse } from "@/types/products-fetch-response";
import { useQuery } from "../../node_modules/@tanstack/react-query/build/lib/useQuery";
import axios, { AxiosPromise } from "../../node_modules/axios/index";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,{
        query: 
        `
            query{
                allProducts{
                    id
                    name
                    price_in_cents
                    image_url
                }
            }      
        `
    })
}

export function useProducts(){
    const { data, } = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    return {
        data: data?.data?.data?.allProducts
    }
}