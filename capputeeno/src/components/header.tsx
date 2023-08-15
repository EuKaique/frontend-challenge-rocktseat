"use client"

import { styled } from "styled-components";

import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";
import { useFilter } from "@/hooks/useFilter";
import Link from "next/link";

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] 
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${(props:any) => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
`

const Logo = styled(Link)`
    color: var(--logo-color);
    font-weight: 400;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${(props:any) => props.theme.tabletBreakpoint}){
        font-size: 24px;
    }

    @media (min-width: ${(props:any) => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`

export function Header(){
    const { search, setSearch } = useFilter()
    return (
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon 
                    placeholder="Procurando por algo específico?"
                    value={search}
                    handleChange={setSearch}
                />
                <CartControl />
            </div>
        </TagHeader>
    )
}