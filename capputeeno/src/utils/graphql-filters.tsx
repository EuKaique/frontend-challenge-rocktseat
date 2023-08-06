import { FilterPriority } from "@/types/filter-priority";
import { FilterType } from "@/types/filter-type";

export function getCategoryByTypes(type: FilterType){
    if(type === FilterType.MUG) return "mugs"
    if(type === FilterType.SHIRT) return "t-shirts"

    return "" 
}

export function getFieldByPriority(priority: FilterPriority){
    if(priority === FilterPriority.BIGGER) return {sortField: "price_in_cents", sortOrder: "DSC"}
    if(priority === FilterPriority.SMALL) return {sortField: "price_in_cents", sortOrder: "ASC"}
    if(priority === FilterPriority.NEWS) return {sortField: "created-at", sortOrder: "DSC"}
    
    return {sortField: "sales", sortOrder: "DSC"}
}

export function mountQuery(type: FilterType, priority: FilterPriority){
    if(type === FilterType.ALL && priority === FilterPriority.BEST_SELLERS) return `
            query{
                allProducts(sortField: "sales", sortOrder: "DSC"){
                    id
                    name
                    price_in_cents
                    image_url
                    category
                }
            }      
    `

    const categories = getCategoryByTypes(type) ? `filter: { category: "${getCategoryByTypes(type)}" }` : ""
    const sortField  = getFieldByPriority(priority).sortField
    const sortOrder  = getFieldByPriority(priority).sortOrder

    return `
        query{
            allProducts(sortField: "${sortField}", sortOrder: "${sortOrder}", ${categories}){
                id
                name
                price_in_cents
                image_url
                category
            }
        }  
    `
}