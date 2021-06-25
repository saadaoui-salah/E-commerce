export const EDIT = 'EDIT' 
export function edit(id){
    return{
        type:EDIT,
        id:id,
    }
}

export const REMOVE = 'REMOVE'
export function cancel(){
    return{
        type:REMOVE,
    }
}

export const OPEN = 'OPEN' 
export function openDropDown(id){
    return{
        type:OPEN,
        id:id
    }
}

export const CLOSE = 'CLOSE' 
export function closeDropDown(){
    return {type:CLOSE}
}

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export function addProduct(product){
    return{
        type:ADD_PRODUCT,
        id:product.id,
        image:product.image,
        name:product.name,
        category:product.category,
        parentCategory:product.parentCategory,
        quantity:product.quantity,
        bPrice:product.priceAchat,
        vPrice:product.priceVender,
        detail:product.detail
    }
}


export const ADD_CATEGORY = "ADD_CATEGORY"
export function addCategory(category){
    return{
        type:ADD_CATEGORY,
        id:category.id,
        category:category.category,
        parendID:category.parentCategory.id
    }
} 


export const DARK = 'DARK'
export function setDark(isDark){
    return {
        type: DARK,
        dark: isDark
    }
}