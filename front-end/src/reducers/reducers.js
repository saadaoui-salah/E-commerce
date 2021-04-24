import {EDIT, REMOVE, OPEN,CLOSE} from './actoins'
import {dropDown, options} from './state'


export const OptionsReducer = (state=options, action) => {
    switch (action.type) {
        case EDIT:
            return {
                remove:false,
                edit: true,
                id:action.id
            }
        case REMOVE:
            return {
                id:null,
                edit: true,
                remove: false
            }
        default:
            return state
    }
}

export const Dropdown = (state=dropDown, action) => {
    switch(action.type){
        case OPEN:
            return {
                open:true,
                id:action.id
            }
        case CLOSE:
            return {
                id:null,
                open:false
            }
    }
}