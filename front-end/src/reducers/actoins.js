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


export const DARK = 'DARK'
export function setDark(isDark){
    return {
        type: DARK,
        dark: isDark
    }
}