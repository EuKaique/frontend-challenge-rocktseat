"use client"

import { FilterPriority } from "@/types/filter-priority";
import { FilterType } from "@/types/filter-type";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: FilterPriority.BEST_SELLERS,
    setSearch:   (value: string) => {},
    setPage:     (value: number) => {},
    setType:     (value: FilterType) => {},
    setPriority: (value: FilterPriority) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
    const [search,   setSearch]     = useState('')
    const [page,     setPage]       = useState(0)
    const [type,     setType]       = useState(FilterType.ALL)
    const [priority, setPriority]   = useState(FilterPriority.BEST_SELLERS)

    return (
        <FilterContext.Provider value={{search, page, type, priority, setSearch, setPage, setType, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}