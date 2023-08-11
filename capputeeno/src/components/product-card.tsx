import { formatPrice } from "@/utils/format-price"
import { styled } from "styled-components"
import { useRouter } from "../../node_modules/next/navigation"

interface ProductCardProps {
    image: string
    title: string
    price: number
    id: string
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img{
        width: 256px;
        height: 300px;
    }

    h3{
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--text-dark-2);
    }

    p{
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--shapes-dark);
    }

    div{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0px;

        div{
            width: 228px;
            height: 1.1px;
            background-color: var(--shapes);
            padding: 0;
            margin: 8px 0;
        }
    }
    cursor: pointer;

`

export function ProductCard(props: ProductCardProps){
    const router = useRouter()
    const handleNavigate = () => {
        router.push(`/product?id=${props.id}`)
    }
    const price = formatPrice(props.price)

    return(
        <Card onClick={handleNavigate}>
            <img src={props.image} alt={props.title}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}