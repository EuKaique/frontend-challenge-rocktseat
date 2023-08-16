"use client"

import { ProductsFetchResponse } from "@/types/products-fetch-response";
import { mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue, useEffect } from "react";
import { useQuery } from "../../node_modules/@tanstack/react-query/build/lib/useQuery";
import axios, { AxiosPromise } from "../../node_modules/axios/index";
import { useFilter } from "./useFilter";

const API_URL = "https://capputeeno-eukaique.vercel.app";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query })
}

export function useProducts(){
    const { type, priority, search } = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority)
    const { data, } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority],
        staleTime: 1000 * 60 * 5
    })

    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter((product:any) => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
        data: filteredProducts
    }
}