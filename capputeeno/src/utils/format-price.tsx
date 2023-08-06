export function formatPrice(value: number){
    const price = value / 100;
    
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}