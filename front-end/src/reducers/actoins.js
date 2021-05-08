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
export function addProduct(image,name,category,parentCategory,quantity,bPrice,vPrice,detail){
    return{
        type:ADD_PRODUCT,
        image:image,
        name:name,
        category:category,
        parentCategory:parentCategory,
        quantity:quantity,
        bPrice:bPrice,
        vPrice:vPrice,
        detail:detail
    }
}


