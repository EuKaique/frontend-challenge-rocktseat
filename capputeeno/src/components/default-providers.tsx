"use client"

import { QueryClientProvider } from "../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider";
import { QueryClient } from '../../node_modules/@tanstack/query-core/build/lib/queryClient';
import { FilterContextProvider } from "@/contexts/filter-context";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    tabletBreakpoint: '768px',
    desktopBreakpoint: '968px'
}

export function DefaultProviders({children}: DefaultProvidersProps){
    const client = new QueryClient()

    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
            {/* <main className={styles.main}>
            <FilterBar />
            <ProductsList />
            </main> */}
        </QueryClientProvider>
    )
}