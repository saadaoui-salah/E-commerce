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


