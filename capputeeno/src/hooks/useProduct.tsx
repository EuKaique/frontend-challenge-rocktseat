import { ProductFetchResponse } from "@/types/products";
import { useQuery } from "../../node_modules/@tanstack/react-query/build/lib/useQuery";
import axios, { AxiosPromise } from "../../node_modules/axios/index";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, { query: `
        query {
            Product(id: "${productId}"){
                name
                description
                category
                price_in_cents
                image_url
            }
        }
    ` })
}

export function useProduct(id: string){
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id
    })

    return {
        data: data?.data?.data?.Product
    }
}