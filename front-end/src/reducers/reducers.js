import {EDIT, REMOVE} from './actoins'

export const OptionsReducer = (state, action) => {
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