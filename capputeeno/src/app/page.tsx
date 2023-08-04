"use client"

import styles from './page.module.css';
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from '@/components/products-list';
import { QueryClientProvider } from '../../node_modules/@tanstack/react-query/build/lib/QueryClientProvider';
import { QueryClient } from '../../../api/node_modules/@tanstack/query-core/build/lib/queryClient';


export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  )
  
}
