import { ProductFetchResponse } from "@/types/products";
import { useQuery } from "../../node_modules/@tanstack/react-query/build/lib/useQuery";
import axios, { AxiosPromise } from "../../node_modules/axios/index";

const url = typeof window !== 'undefined' ? `${window.location.href}` : ''
const urlCurrent = url.split(":")[1]
const API_URL = "https:" + urlCurrent + ":3333";

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
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })

    return {
        data: data?.data?.data?.Product
    }
}