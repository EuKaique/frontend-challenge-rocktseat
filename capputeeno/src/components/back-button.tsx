import { styled } from "styled-components"
import { useRouter } from "../../node_modules/next/navigation"
import { BackIcon } from "./icons/back-icon"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    color: var(--secondary-text);
    background-color: transparent;
    border: none;

    margin-bottom: 1.6rem;

    cursor: pointer;
`

interface BtnProps{
    navigate: string
}

export function BackBtn({navigate}: BtnProps){
    const router = useRouter()

    const handleNavigate = () => {
        router.push(navigate)
    }
    return(
        <Button onClick={handleNavigate}>
            <BackIcon /> Voltar
        </Button>
    )
}