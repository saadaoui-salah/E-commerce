import { EDIT, REMOVE, OPEN, CLOSE } from './actoins'
import { UPDATE_PRODUCT, ADD_PRODUCT } from './actoins'


export function OptionsReducer(state, action) {
    switch (action.type) {
        case EDIT:
            return {
                remove: false,
                edit: true,
                id: action.id
            }
        case REMOVE:
            return {
                id: null,
                edit: true,
                remove: false
            }
        default:
            return state
    }
}

export const Dropdown = (state, action) => {
    switch (action.type) {
        case OPEN:

            return {
                open: true,
                id: action.id
            }
        case CLOSE:
            return {
                id: null,
                open: false
            }
        default:
            return state
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: action.id,
                image: action.image,
                name: action.name,
                category: action.category,
                quantity: action.quantity,
                bPrice: action.bPrice,
                vPrice: action.vPrice,
            }]
        case UPDATE_PRODUCT:
            return [...state, {
                id: action.id,
                image: action.image,
                name: action.name,
                category: action.category,
                quantity: action.quantity,
                bPrice: action.bPrice,
                vPrice: action.vPrice,
            }]
        default:
            return state
    }

}