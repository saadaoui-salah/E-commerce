export const EDIT = 'EDIT' 
export const REMOVE = 'REMOVE'
export const OPEN = 'OPEN' 
export const CLOSE = 'CLOSE' 
export const SET_ID = 'SET_ID'

export function edit(id){
    return{
        type:EDIT,
        id:id,
    }
}

export function cancel(){
    return{
        type:REMOVE,
    }
}

export function openDropDown(id){
    return{
        type:OPEN,
        id:id
    }
}

export function closeDropDown(){
    return {type:CLOSE}
}