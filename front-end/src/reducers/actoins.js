export const EDIT = 'EDIT' 
export const REMOVE = 'REMOVE' 
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
