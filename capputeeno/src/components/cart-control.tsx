import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
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

const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])
    return (
        <Container>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}