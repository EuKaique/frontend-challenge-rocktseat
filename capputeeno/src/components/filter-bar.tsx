"use client"

import { styled } from 'styled-components';
import { FilterByPriority } from './filter-by-priority';
import { FilterByType } from './filter-by-type';

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
    justify-content: space-between;
`

export function FilterBar(props: FilterBarProps){
    return (
        <FilterContainer>
           <FilterByType />
           <FilterByPriority />
        </FilterContainer>
    )
}