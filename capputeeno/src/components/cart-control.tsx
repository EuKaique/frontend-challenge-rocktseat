import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
import { useRouter } from "../../node_modules/next/navigation";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    font-size: 10px;
    padding: 1.5px 6px;
    background-color: #DE3838;
    color: #FFF;

    margin-left: -8px;
`

const Container = styled.button`
    position: relative;
    background-color: transparent;
    border: none;
    
    cursor: pointer;
`

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    return (
        <Container onClick={() => router.push('/cart')}>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}