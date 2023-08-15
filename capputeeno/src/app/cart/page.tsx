"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-items";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";
import { ProductInCart } from '../../types/products'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 32px;

    @media (min-width: ${(props: any) => props.theme.desktopBreakpoint}){
        flex-direction: row;
    }
`

const CartListContainer = styled.div`
    h3{
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--text-dark-2);
    }
    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span{
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 16px;
    margin-top: 24px;
`

const CartResumeContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    height: 100%;
    width: 100%;
    padding: 16px 24px;

    background-color: #FFF;

    h3{
        text-transform: uppercase;

        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark-2);

        margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${(props:any) => props.isBold ? 600 : 400 };
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopBtn = styled.button`
    color: #FFF;
    background-color: var(--success-color);
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 16px;

    cursor: pointer;

    &:hover{
        opacity: 0.9;
        transition: 0.2s;
    }
`

export default function CartPage(){
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculatedTotal = (value: ProductInCart[]) => {
        return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatPrice(calculatedTotal(value))
    const cartTotalWithDelivery = formatPrice(calculatedTotal(value) + 4000)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity}
        })
        updateLocalStorage(newValue)
    }

    const handleDelete = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return(
        <DefaultPageLayout>
            <Container>
                <CartListContainer>
                <BackBtn navigate="/" />
                    <h3>Seu carrinho</h3>
                    <p>
                        Total {value.length} produtos
                        <span> {cartTotal}</span>
                    </p>
                    <CartList>
                        {value.map(item => (
                            <CartItem
                                key={item.id} 
                                product={item}
                                handleUpdateQuantity={handleUpdateQuantity}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </CartList>
                </CartListContainer>
                <CartResumeContainer>
                    <h3>Resumo do pedido</h3>
                    <TotalItem isBold={false}>
                        <p>Subtotal do produto</p>
                        <p>{cartTotal}</p>
                    </TotalItem>
                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatPrice(4000)}</p>
                    </TotalItem>
                    <Divider />
                    <TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </TotalItem>
                    <ShopBtn>Finalizar compra</ShopBtn>
                </CartResumeContainer>
            </Container>
        </DefaultPageLayout>
    )
}