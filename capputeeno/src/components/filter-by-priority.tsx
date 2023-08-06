import { useFilter } from '@/hooks/useFilter';
import { FilterPriority } from '@/types/filter-priority';
import { useState } from 'react';
import { styled } from 'styled-components';
import { ArrowIcon } from './icons/arrow-icon';

interface FilterByPriorityProps{

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button{
        background-color: transparent;
        border: none;
        
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg{
            margin-left: 10px;
        }
    }
`

const PrioriryFilter = styled.ul`
    z-index: 10;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    border-radius: 4px;
    padding: 12px 16px;

    list-style: none;
    top: 100%;
    width: 250px;

    li{
        color: var(--text-dark);
        font-size: 14px;
    }

    li:hover{
        font-weight: 600;
        transition: 0.2s;
    }

    li + li {
        margin-top: 4px;
    }

    cursor: pointer;
`

export function FilterByPriority(props: FilterByPriorityProps){
    const { setPriority } = useFilter()
    const handlePriority  = (value: FilterPriority) => {
        setPriority(value)
        setIsOpen(false)
    }

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por 
                <ArrowIcon />
            </button>
            {isOpen && (
                <PrioriryFilter>
                    <li onClick={() => handlePriority(FilterPriority.NEWS)}>Novidades</li>
                    <li onClick={() => handlePriority(FilterPriority.BIGGER)}>Preço: maior para menor</li>
                    <li onClick={() => handlePriority(FilterPriority.SMALL)}>Preço: menor para maior</li>
                    <li onClick={() => handlePriority(FilterPriority.BEST_SELLERS)}>Mais vendidos</li>
                </PrioriryFilter>
            )}
        </FilterContainer>
    )
}