export const EDIT = 'EDIT' 
export const REMOVE = 'REMOVE' 
export const SET_ID = 'SET_ID'

export function edit(value){
    return{
        type:EDIT,
        pyload:value
    }
}

export function remove(value){
    return{
        type:REMOVE,
        pyload:value
    }
}

export function setID(id){
    return{
        type:SET_ID,
        pyload:id
    }
}
