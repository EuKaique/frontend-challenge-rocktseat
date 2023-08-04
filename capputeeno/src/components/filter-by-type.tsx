import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/filter-type';
import { styled } from 'styled-components';

type FilterItemProps = {
    selected: boolean
}

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-size: 16px;
    font-weight: ${props => props.selected ? 600 : 400};
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: ${props => props.selected ? '#41414D' : 'var(--text-dark)'};

    border-bottom: ${props => props.selected ? '4px solid #FFA585' : ''};

    cursor: pointer;
`

export function FilterByType(){
    const { type, setType } = useFilter()

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>TODOS OS PRODUTOS</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>CAMISETAS</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>CANECAS</FilterItem>
        </FilterList>
    )
}