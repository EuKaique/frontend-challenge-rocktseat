import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { SearchIconSvg } from "./icons/search-icon";

export const PrimaryInput = styled.input`
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    width: 100%;
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    outline: none;

    background-color: var(--bg-secondary);
    color: var(--text-dark);

    @media (min-width: ${(props:any) => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`

export const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);

        cursor: pointer;
    }

    @media (min-width: ${(props:any) => props.theme.desktopBreakpoint}){
        width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string
    handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return(
         <InputContainer>
            <PrimaryInput onChange={(event:any) => props.handleChange(event.target.value)} {...props} />
            <SearchIconSvg />
         </InputContainer>
    )
}